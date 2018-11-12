package edu.iss.gitcloneteam.weatherobserver.dao;

import edu.iss.gitcloneteam.weatherobserver.model.Measurement;

import java.util.List;

public interface MeasurementDao {

    Measurement getLastMeasurement();

    void addMeasurement(Measurement measurement);

    List<Measurement> getMeasurementForTimeInterval(int hours);

}
