package com.runningmedian.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class HeapResponse {

    private List<Integer> lowerHalf;
    private List<Integer> upperHalf;
}