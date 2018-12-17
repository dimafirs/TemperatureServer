package edu.iss.gitcloneteam.weatherobserver.dao;

import edu.iss.gitcloneteam.weatherobserver.model.Measurement;

import java.util.List;

public interface MeasurementDao {

    Measurement getLastMeasurement() throws Exception;

    List<Measurement> getMeasurementsForTimeInterval(int hours);

    void addMeasurement(Measurement measurement);

}
