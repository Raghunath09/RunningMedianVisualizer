package com.runningmedian.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.runningmedian.entity.NumberRecord;

// @Repository
public interface RunningMedianRepository
        extends JpaRepository<NumberRecord, Long> {

}