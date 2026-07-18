package com.runningmedian.core;

public class InsertionResult {

    private final HeapType targetHeap;

    private final boolean rebalanced;

    private final int maxHeapSize;

    private final int minHeapSize;

    private final double median;

    public InsertionResult(
            HeapType targetHeap,
            boolean rebalanced,
            int maxHeapSize,
            int minHeapSize,
            double median) {

        this.targetHeap = targetHeap;
        this.rebalanced = rebalanced;
        this.maxHeapSize = maxHeapSize;
        this.minHeapSize = minHeapSize;
        this.median = median;
    }

    public HeapType getTargetHeap() {
        return targetHeap;
    }

    public boolean isRebalanced() {
        return rebalanced;
    }

    public int getMaxHeapSize() {
        return maxHeapSize;
    }

    public int getMinHeapSize() {
        return minHeapSize;
    }

    public double getMedian() {
        return median;
    }

}