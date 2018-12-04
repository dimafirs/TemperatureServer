package edu.iss.gitcloneteam.weatherobserver.services;

import edu.iss.gitcloneteam.weatherobserver.model.Measurement;
import edu.iss.gitcloneteam.weatherobserver.utils.TimeUnit;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service("MeasurementServiceTestDataImpl")
public class MeasurementServiceTestDataImpl implements MeasurementService {

    private TimeUnit timeUnit;

    Random random = new Random();
    final int TEMP_MAX = 50;
    final int TEMP_MIN = -50;
    final int PRES_MAX = 780;
    final int PRES_MIN = 730;

    @Override
    public Measurement getLastMeasurement() {
        Measurement measurement = new Measurement();
        measurement.setId(1);
        measurement.setTemperature(getRandomTemperature());
        measurement.setPressure(getRandomPressure());
        measurement.setMeasurementTime(LocalDateTime.now());
        return measurement;
    }

    @Override
    public List<Measurement> getMeasurementsForTimeInterval(String timeUnitValue, int duration) {
        TimeUnit timeUnit = TimeUnit.getTimeUnitByValue(timeUnitValue);
        int measurementCount = duration;
        LocalDateTime firstTime = LocalDateTime.now();
        switch (timeUnit) {
            case HOUR:
                firstTime = firstTime.minusHours(duration);
                break;
            case DAY:
                firstTime = firstTime.minusDays(duration);
                break;
        }

        List<Measurement> measurements = new ArrayList<>();
        for (int i = 1; i <= duration; i++) {
            Measurement measurement = new Measurement();
            measurement.setId(i);
            measurement.setTemperature(getRandomTemperature());
            measurement.setPressure(getRandomPressure());
            switch (timeUnit) {
                case HOUR:
                    measurement.setMeasurementTime(firstTime.plusHours(i));
                    break;
                case DAY:
                    measurement.setMeasurementTime(firstTime.plusDays(i));
                    break;
            }
        measurements.add(measurement);
        }

        return measurements;
    }

    @Override
    public Measurement getAverageMeasurementForLast24Hours() {
        Measurement measurement = new Measurement();
        measurement.setId(1);
        measurement.setTemperature(getRandomTemperature());
        measurement.setPressure(getRandomPressure());
        return measurement;
    }

    @Override
    public void addMeasurement(Measurement measurement) {

    }

    private int getRandomTemperature() {
        return TEMP_MIN + random.nextInt(Math.abs(TEMP_MIN) + Math.abs(TEMP_MAX));
    }

    private int getRandomPressure() {
        return PRES_MIN + random.nextInt(PRES_MAX - PRES_MIN);
    }

    public TimeUnit getTimeUnit() {
        return timeUnit;
    }

    public void setTimeUnit(TimeUnit timeUnit) {
        this.timeUnit = timeUnit;
    }
}
