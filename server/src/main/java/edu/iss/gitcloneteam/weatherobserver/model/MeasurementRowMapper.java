package edu.iss.gitcloneteam.weatherobserver.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MeasurementRowMapper implements RowMapper<Measurement> {
    @Override
    public Measurement mapRow(ResultSet resultSet, int i) throws SQLException {
        Measurement measurement = new Measurement();
        measurement.setId(resultSet.getInt("measurement_id"));
        measurement.setTemperature(resultSet.getInt("temperature"));
        measurement.setPressure(resultSet.getInt("pressure"));
        measurement.setMeasurementTime(resultSet.getTimestamp("measurement_time").toLocalDateTime());
        return measurement;
    }
}
