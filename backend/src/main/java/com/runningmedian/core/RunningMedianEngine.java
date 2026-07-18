package com.runningmedian.core;

import java.util.Collections;
import java.util.PriorityQueue;

import org.springframework.stereotype.Component;

@Component
public class RunningMedianEngine {

    private final PriorityQueue<Integer> maxHeap =
            new PriorityQueue<>(Collections.reverseOrder());

    private final PriorityQueue<Integer> minHeap =
            new PriorityQueue<>();

    public InsertionResult addNumber(int number) {

        HeapType targetHeap;

        if (maxHeap.isEmpty() || number <= maxHeap.peek()) {
            maxHeap.offer(number);
            targetHeap = HeapType.MAX_HEAP;
        } else {
            minHeap.offer(number);
            targetHeap = HeapType.MIN_HEAP;
        }

        boolean rebalanced = false;

        if (maxHeap.size() > minHeap.size() + 1) {
            minHeap.offer(maxHeap.poll());
            rebalanced = true;
        } else if (minHeap.size() > maxHeap.size()) {
            maxHeap.offer(minHeap.poll());
            rebalanced = true;
        }

        return new InsertionResult(
                targetHeap,
                rebalanced,
                maxHeap.size(),
                minHeap.size(),
                getMedian()
        );
    }

    public double getMedian() {

        if (maxHeap.isEmpty()) {
            return 0.0;
        }

        if (maxHeap.size() == minHeap.size()) {
            return (maxHeap.peek() + minHeap.peek()) / 2.0;
        }

        return maxHeap.peek();
    }

    public void reset() {
        maxHeap.clear();
        minHeap.clear();
    }

    public PriorityQueue<Integer> getMaxHeap() {
        return maxHeap;
    }

    public PriorityQueue<Integer> getMinHeap() {
        return minHeap;
    }

}