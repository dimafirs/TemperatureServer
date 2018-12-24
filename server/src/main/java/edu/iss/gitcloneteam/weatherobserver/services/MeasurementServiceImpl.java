package edu.iss.gitcloneteam.weatherobserver.services;

import edu.iss.gitcloneteam.weatherobserver.dao.MeasurementDao;
import edu.iss.gitcloneteam.weatherobserver.model.Measurement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("MeasurementServiceImpl")
public class MeasurementServiceImpl implements MeasurementService {

    private MeasurementDao measurementDao;

    @Autowired
    public MeasurementServiceImpl(MeasurementDao measurementDao) {
        this.measurementDao = measurementDao;
    }

    @Override
    public Measurement getLastMeasurement() {
        Measurement lastMeasurement = null;
        try {
            lastMeasurement = measurementDao.getLastMeasurement();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return lastMeasurement;
    }

    @Override
    public List<Measurement> getMeasurementsForTimeInterval(String timeUnit, int duration) {
        // convert with timeUnit
        List<Measurement> measurements = measurementDao.getMeasurementsForTimeInterval(duration);
        return measurements;
    }

    @Override
    public void addMeasurement(Measurement measurement) {
        measurementDao.addMeasurement(measurement);
    }

    @Override
    public Measurement getAverageMeasurementForLast24Hours() {
        List<Measurement> measurements = measurementDao.getMeasurementsForTimeInterval(24);
        Measurement averageMeasurementForLast24Hours = countAverageMeasurement(measurements);
        return averageMeasurementForLast24Hours;
    }

    private Measurement countAverageMeasurement(List<Measurement> measurements) {
        int temperatureSum = 0, humiditySum = 0;
        for (Measurement measurement : measurements) {
            temperatureSum += measurement.getTemperature();
            humiditySum += measurement.getHumidity();
        }
        int temperatureAverage = temperatureSum / measurements.size();
        int humidityAverage = humiditySum / measurements.size();
        Measurement measurement = new Measurement();
        measurement.setTemperature(temperatureAverage);
        measurement.setHumidity(humidityAverage);
        return measurement;
    }
}
