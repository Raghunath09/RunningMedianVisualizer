package com.runningmedian.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.runningmedian.core.InsertionResult;
import com.runningmedian.core.RunningMedianEngine;
import com.runningmedian.dto.AddNumberRequest;
import com.runningmedian.dto.AlgorithmExecutionResponse;
import com.runningmedian.dto.ChartPointResponse;
import com.runningmedian.dto.HeapResponse;
import com.runningmedian.dto.MedianResponse;
import com.runningmedian.dto.NumberHistoryResponse;
import com.runningmedian.dto.StatisticsResponse;
import com.runningmedian.entity.NumberRecord;
import com.runningmedian.mapper.NumberHistoryMapper;
import com.runningmedian.repository.RunningMedianRepository;
import com.runningmedian.service.RunningMedianService;

@Service
public class RunningMedianServiceImpl implements RunningMedianService {

    private static final Logger logger =
            LoggerFactory.getLogger(RunningMedianServiceImpl.class);

    private final RunningMedianEngine runningMedianEngine;
    private final RunningMedianRepository repository;

    public RunningMedianServiceImpl(
            RunningMedianEngine runningMedianEngine,
            RunningMedianRepository repository) {

        this.runningMedianEngine = runningMedianEngine;
        this.repository = repository;
    }

    @Override
    public AlgorithmExecutionResponse addNumber(AddNumberRequest request) {

        logger.info("Adding number: {}", request.getNumber());

        InsertionResult result =
                runningMedianEngine.addNumber(request.getNumber());

        repository.save(
                new NumberRecord(
                        request.getNumber(),
                        LocalDateTime.now()
                )
        );

        logger.info("Current Median: {}", result.getMedian());

        return new AlgorithmExecutionResponse(
                request.getNumber(),
                result.getTargetHeap().name(),
                result.isRebalanced(),
                result.getMaxHeapSize(),
                result.getMinHeapSize(),
                result.getMedian()
        );
    }

    @Override
    public MedianResponse getMedian() {

        logger.info("Fetching current median.");

        return new MedianResponse(runningMedianEngine.getMedian());
    }

    @Override
    public HeapResponse getHeaps() {

        logger.info("Fetching heap data.");

        return new HeapResponse(
                new ArrayList<>(runningMedianEngine.getMaxHeap()),
                new ArrayList<>(runningMedianEngine.getMinHeap())
        );
    }

    @Override
    public void reset() {

        logger.warn("Resetting Running Median.");

        runningMedianEngine.reset();
        repository.deleteAll();
    }

    @Override
    public List<NumberHistoryResponse> getHistory() {

        logger.info("Fetching insertion history.");

        List<NumberRecord> records = repository.findAll();

        if (records.isEmpty()) {
            logger.info("No history available. Returning empty list.");
            return new ArrayList<>();
        }

        return records.stream()
                .map(NumberHistoryMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public StatisticsResponse getStatistics() {

        logger.info("Fetching statistics.");

        List<NumberRecord> numbers = repository.findAll();

        if (numbers.isEmpty()) {

            logger.info("No statistics available. Returning default values.");

            return new StatisticsResponse(
                    0.0,
                    0.0,
                    0,
                    0,
                    0
            );
        }

        int totalNumbers = numbers.size();

        int minimum = numbers.stream()
                .mapToInt(NumberRecord::getNumber)
                .min()
                .orElse(0);

        int maximum = numbers.stream()
                .mapToInt(NumberRecord::getNumber)
                .max()
                .orElse(0);

        double average = numbers.stream()
                .mapToInt(NumberRecord::getNumber)
                .average()
                .orElse(0.0);

        double median = runningMedianEngine.getMedian();

        return new StatisticsResponse(
                median,
                average,
                minimum,
                maximum,
                totalNumbers
        );
    }

    @Override
    public List<ChartPointResponse> getChartData() {

        logger.info("Fetching chart data.");

        List<NumberRecord> records = repository.findAll();

        if (records.isEmpty()) {

            logger.info("No chart data available. Returning empty list.");

            return new ArrayList<>();
        }

        RunningMedianEngine chartEngine = new RunningMedianEngine();

        List<ChartPointResponse> chartData = new ArrayList<>();

        int step = 1;

        for (NumberRecord record : records) {

            chartEngine.addNumber(record.getNumber());

            chartData.add(
                    new ChartPointResponse(
                            step++,
                            chartEngine.getMedian()
                    )
            );
        }

        return chartData;
    }
}