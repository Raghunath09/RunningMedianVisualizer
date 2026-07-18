package com.runningmedian.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddNumberRequest {

    @NotNull(message = "Number is required.")
    private Integer number;

}