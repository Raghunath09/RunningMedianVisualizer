package com.runningmedian.dto;

public class AlgorithmExecutionResponse {

    private int insertedNumber;

    private String targetHeap;

    private boolean rebalanced;

    private int maxHeapSize;

    private int minHeapSize;

    private double median;

    public AlgorithmExecutionResponse() {
    }

    public AlgorithmExecutionResponse(
            int insertedNumber,
            String targetHeap,
            boolean rebalanced,
            int maxHeapSize,
            int minHeapSize,
            double median) {

        this.insertedNumber = insertedNumber;
        this.targetHeap = targetHeap;
        this.rebalanced = rebalanced;
        this.maxHeapSize = maxHeapSize;
        this.minHeapSize = minHeapSize;
        this.median = median;
    }

    public int getInsertedNumber() {
        return insertedNumber;
    }

    public void setInsertedNumber(int insertedNumber) {
        this.insertedNumber = insertedNumber;
    }

    public String getTargetHeap() {
        return targetHeap;
    }

    public void setTargetHeap(String targetHeap) {
        this.targetHeap = targetHeap;
    }

    public boolean isRebalanced() {
        return rebalanced;
    }

    public void setRebalanced(boolean rebalanced) {
        this.rebalanced = rebalanced;
    }

    public int getMaxHeapSize() {
        return maxHeapSize;
    }

    public void setMaxHeapSize(int maxHeapSize) {
        this.maxHeapSize = maxHeapSize;
    }

    public int getMinHeapSize() {
        return minHeapSize;
    }

    public void setMinHeapSize(int minHeapSize) {
        this.minHeapSize = minHeapSize;
    }

    public double getMedian() {
        return median;
    }

    public void setMedian(double median) {
        this.median = median;
    }

}