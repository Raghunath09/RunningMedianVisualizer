package com.runningmedian.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ChartPointResponse {

    private int step;
    private double median;

}