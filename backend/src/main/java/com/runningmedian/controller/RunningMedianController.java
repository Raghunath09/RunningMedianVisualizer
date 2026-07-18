package com.runningmedian.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.runningmedian.constant.ApiMessages;
import com.runningmedian.dto.AddNumberRequest;
import com.runningmedian.dto.AlgorithmExecutionResponse;
import com.runningmedian.dto.ChartPointResponse;
import com.runningmedian.dto.HeapResponse;
import com.runningmedian.dto.MedianResponse;
import com.runningmedian.dto.NumberHistoryResponse;
import com.runningmedian.dto.StatisticsResponse;
import com.runningmedian.response.ApiResponse;
import com.runningmedian.service.RunningMedianService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/median")

public class RunningMedianController {

    private final RunningMedianService runningMedianService;

    public RunningMedianController(RunningMedianService runningMedianService) {
        this.runningMedianService = runningMedianService;
    }

    @PostMapping("/add")
    public ApiResponse<AlgorithmExecutionResponse> addNumber(
            @Valid @RequestBody AddNumberRequest request) {

        AlgorithmExecutionResponse response =
                runningMedianService.addNumber(request);

        return new ApiResponse<>(
                true,
                ApiMessages.NUMBER_ADDED,
                response,
                LocalDateTime.now()
        );
    }

    @GetMapping
    public ApiResponse<MedianResponse> getMedian() {

        MedianResponse response = runningMedianService.getMedian();

        return new ApiResponse<>(
                true,
                ApiMessages.MEDIAN_FETCHED,
                response,
                LocalDateTime.now()
        );
    }

    @GetMapping("/heaps")
    public ApiResponse<HeapResponse> getHeaps() {

        HeapResponse response = runningMedianService.getHeaps();

        return new ApiResponse<>(
                true,
                ApiMessages.HEAPS_FETCHED,
                response,
                LocalDateTime.now()
        );
    }

    @DeleteMapping("/reset")
    public ApiResponse<String> reset() {

        runningMedianService.reset();

        return new ApiResponse<>(
                true,
                ApiMessages.DATA_RESET,
                null,
                LocalDateTime.now()
        );
    }

    @GetMapping("/history")
    public ApiResponse<List<NumberHistoryResponse>> getHistory() {

        List<NumberHistoryResponse> history =
                runningMedianService.getHistory();

        return new ApiResponse<>(
                true,
                ApiMessages.HISTORY_FETCHED,
                history,
                LocalDateTime.now()
        );
    }

    @GetMapping("/chart")
    public ApiResponse<List<ChartPointResponse>> getChartData() {

        List<ChartPointResponse> chartData =
                runningMedianService.getChartData();

        return new ApiResponse<>(
                true,
                "Chart data fetched successfully.",
                chartData,
                LocalDateTime.now()
        );
    }

    @GetMapping("/statistics")
    public ApiResponse<StatisticsResponse> getStatistics() {

        StatisticsResponse response =
                runningMedianService.getStatistics();

        return new ApiResponse<>(
                true,
                "Statistics fetched successfully.",
                response,
                LocalDateTime.now()
        );
    }
}