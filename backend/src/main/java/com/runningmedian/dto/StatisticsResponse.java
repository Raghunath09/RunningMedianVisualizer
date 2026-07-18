package com.runningmedian.dto;

public class StatisticsResponse {

    private double currentMedian;
    private double average;
    private int minimum;
    private int maximum;
    private int totalNumbers;

    public StatisticsResponse() {
    }

    public StatisticsResponse(
            double currentMedian,
            double average,
            int minimum,
            int maximum,
            int totalNumbers) {

        this.currentMedian = currentMedian;
        this.average = average;
        this.minimum = minimum;
        this.maximum = maximum;
        this.totalNumbers = totalNumbers;
    }

    public double getCurrentMedian() {
        return currentMedian;
    }

    public void setCurrentMedian(double currentMedian) {
        this.currentMedian = currentMedian;
    }

    public double getAverage() {
        return average;
    }

    public void setAverage(double average) {
        this.average = average;
    }

    public int getMinimum() {
        return minimum;
    }

    public void setMinimum(int minimum) {
        this.minimum = minimum;
    }

    public int getMaximum() {
        return maximum;
    }

    public void setMaximum(int maximum) {
        this.maximum = maximum;
    }

    public int getTotalNumbers() {
        return totalNumbers;
    }

    public void setTotalNumbers(int totalNumbers) {
        this.totalNumbers = totalNumbers;
    }
}