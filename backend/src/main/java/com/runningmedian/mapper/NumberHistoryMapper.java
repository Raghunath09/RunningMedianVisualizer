package com.runningmedian.mapper;

import com.runningmedian.dto.NumberHistoryResponse;
import com.runningmedian.entity.NumberRecord;

public class NumberHistoryMapper {

    private NumberHistoryMapper() {
        // Prevent instantiation
    }

    public static NumberHistoryResponse toResponse(NumberRecord record) {

        return new NumberHistoryResponse(
                record.getId(),
                record.getNumber(),
                record.getCreatedAt()
        );
    }
}