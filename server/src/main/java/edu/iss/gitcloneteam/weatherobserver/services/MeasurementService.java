package edu.iss.gitcloneteam.weatherobserver.services;

import edu.iss.gitcloneteam.weatherobserver.model.Measurement;

import java.util.List;

public interface MeasurementService {

    Measurement getLastMeasurement();

    List<Measurement> getMeasurementsForTimeInterval(int hours);

    Measurement getAverageMeasurementForLast24Hours();

    void addMeasurement(Measurement measurement);

}
