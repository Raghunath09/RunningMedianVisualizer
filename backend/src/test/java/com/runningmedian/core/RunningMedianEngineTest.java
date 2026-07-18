package com.runningmedian.core;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class RunningMedianEngineTest {

    private RunningMedianEngine engine;

    @BeforeEach
    void setUp() {
        engine = new RunningMedianEngine();
    }

    @Test
    void shouldReturnMedianForSingleElement() {

        engine.addNumber(10);

        assertEquals(10.0, engine.getMedian());
    }

    @Test
    void shouldReturnMedianForEvenElements() {

        engine.addNumber(10);
        engine.addNumber(20);

        assertEquals(15.0, engine.getMedian());
    }

    @Test
    void shouldReturnMedianForOddElements() {

        engine.addNumber(10);
        engine.addNumber(20);
        engine.addNumber(30);

        assertEquals(20.0, engine.getMedian());
    }

    @Test
    void shouldReturnMedianForUnsortedInput() {

        engine.addNumber(30);
        engine.addNumber(10);
        engine.addNumber(20);

        assertEquals(20.0, engine.getMedian());
    }

    @Test
    void shouldHandleDuplicateValues() {

        engine.addNumber(5);
        engine.addNumber(5);
        engine.addNumber(5);

        assertEquals(5.0, engine.getMedian());
    }

    @Test
    void shouldHandleNegativeValues() {

        engine.addNumber(-10);
        engine.addNumber(-20);
        engine.addNumber(-30);

        assertEquals(-20.0, engine.getMedian());
    }

    @Test
    void shouldResetEngine() {

        engine.addNumber(10);
        engine.addNumber(20);

        engine.reset();

        assertEquals(0, engine.getMaxHeap().size());
        assertEquals(0, engine.getMinHeap().size());
        assertEquals(0.0, engine.getMedian());
    }

    @Test
    void shouldBalanceHeapsCorrectly() {

        engine.addNumber(10);
        engine.addNumber(20);
        engine.addNumber(30);
        engine.addNumber(40);
        engine.addNumber(50);

        int difference = Math.abs(
                engine.getMaxHeap().size() - engine.getMinHeap().size());

        assertEquals(true, difference <= 1);
    }
}