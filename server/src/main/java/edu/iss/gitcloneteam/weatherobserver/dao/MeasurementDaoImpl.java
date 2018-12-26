package edu.iss.gitcloneteam.weatherobserver.dao;

import edu.iss.gitcloneteam.weatherobserver.model.Measurement;
import edu.iss.gitcloneteam.weatherobserver.model.MeasurementRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.retry.support.RetryTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
@PropertySource("classpath:/queries.properties")
public class MeasurementDaoImpl implements MeasurementDao {

    private JdbcTemplate jdbcTemplate;
    private Environment environment;
    private RetryTemplate retryTemplate;

    @Autowired
    public MeasurementDaoImpl(JdbcTemplate jdbcTemplate, Environment environment, RetryTemplate retryTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.environment = environment;
        this.retryTemplate = retryTemplate;
    }

    @Override
    public Measurement getLastMeasurement() throws Exception {
        String query = environment.getProperty("select.measurement.last");
        RowMapper<Measurement> rowMapper = new MeasurementRowMapper();
        final Measurement[] lastMeasurement = new Measurement[1];
        retryTemplate.execute(arg0 -> {
            lastMeasurement[0] = jdbcTemplate.queryForObject(query, rowMapper);
            return null;
        });
        return lastMeasurement[0];
    }

    @Override
    public List<Measurement> getMeasurementsForTimeInterval(int hours) {
        String query = environment.getProperty("select.measurements.for.interval");
        RowMapper<Measurement> rowMapper = new BeanPropertyRowMapper<Measurement>(Measurement.class);
        List<Measurement> measurementsForTimeInterval = jdbcTemplate.query(query, rowMapper, hours);
        return measurementsForTimeInterval;
    }

    @Override
    public void addMeasurement(Measurement measurement) {
        String query = environment.getProperty("insert.measurement");
        jdbcTemplate.update(
                query,
                measurement.getTemperature(),
                measurement.getHumidity(),
                Timestamp.valueOf(measurement.getMeasurementTime())
        );
    }
}
