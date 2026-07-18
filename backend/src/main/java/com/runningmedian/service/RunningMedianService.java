package com.runningmedian.service;

import java.util.List;

import com.runningmedian.dto.AddNumberRequest;
import com.runningmedian.dto.AlgorithmExecutionResponse;
import com.runningmedian.dto.ChartPointResponse;
import com.runningmedian.dto.HeapResponse;
import com.runningmedian.dto.MedianResponse;
import com.runningmedian.dto.NumberHistoryResponse;
import com.runningmedian.dto.StatisticsResponse;

public interface RunningMedianService {

    AlgorithmExecutionResponse addNumber(AddNumberRequest request);

    MedianResponse getMedian();

    HeapResponse getHeaps();

    void reset();

    List<NumberHistoryResponse> getHistory();

    StatisticsResponse getStatistics();

    List<ChartPointResponse> getChartData();
}