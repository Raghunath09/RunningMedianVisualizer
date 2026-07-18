package com.runningmedian.dto;

import java.time.LocalDateTime;

public class NumberHistoryResponse {

    private Long id;
    private Integer number;
    private LocalDateTime createdAt;

    public NumberHistoryResponse(Long id,
                                 Integer number,
                                 LocalDateTime createdAt) {

        this.id = id;
        this.number = number;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public Integer getNumber() {
        return number;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}