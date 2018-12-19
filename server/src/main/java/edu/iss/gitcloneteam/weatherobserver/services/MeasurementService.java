package edu.iss.gitcloneteam.weatherobserver.services;

import edu.iss.gitcloneteam.weatherobserver.model.Measurement;

import java.util.List;

public interface MeasurementService {

    Measurement getLastMeasurement();

    List<Measurement> getMeasurementsForTimeInterval(String timeUnit, int value);

    Measurement getAverageMeasurementForLast24Hours();

    void addMeasurement(Measurement measurement);

}
