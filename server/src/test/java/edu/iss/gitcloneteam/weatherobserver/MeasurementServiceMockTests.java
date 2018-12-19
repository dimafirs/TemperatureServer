package edu.iss.gitcloneteam.weatherobserver;

import edu.iss.gitcloneteam.weatherobserver.dao.MeasurementDao;
import edu.iss.gitcloneteam.weatherobserver.model.Measurement;
import edu.iss.gitcloneteam.weatherobserver.services.MeasurementServiceImpl;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MeasurementServiceMockTests {

    @Mock
    private MeasurementDao measurementDaoMock;

    @InjectMocks
    private MeasurementServiceImpl measurementService;

    @Before
    public void setup(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void getLastMeasurementTest() throws Exception {
        LocalDateTime measurementTimeCurrent = LocalDateTime.now();
        Measurement lastMeasurement = new Measurement();
        lastMeasurement.setMeasurementTime(measurementTimeCurrent);

        Mockito.when(measurementDaoMock.getLastMeasurement())
                .thenReturn(lastMeasurement);

        Measurement actualMeasurement = measurementService.getLastMeasurement();
        assertTrue(actualMeasurement.getMeasurementTime().isEqual(measurementTimeCurrent));
    }

    @Test
    public void getAverageMeasurementForLast24HoursTest() {
        List<Measurement> measurements = new ArrayList<>();
        Random r = new Random();
        int average_t = 0;
        int average_p = 0;
        for(int i=0; i<5; i++){
            Measurement m = new Measurement();
            m.setMeasurementTime(LocalDateTime.now());
            m.setTemperature(Math.round(r.nextFloat()*25));
            m.setHumidity(Math.round(r.nextFloat()*20) + 760);
            average_t+=m.getTemperature();
            average_p+=m.getHumidity();
            measurements.add(m);
        }
        average_t/=5;
        average_p/=5;
        Mockito.when(measurementDaoMock.getMeasurementsForTimeInterval(24))
                .thenReturn(measurements);
        Measurement aver_m = measurementService.getAverageMeasurementForLast24Hours();
        Assert.assertEquals(average_t, aver_m.getTemperature());
        Assert.assertEquals(average_p, aver_m.getHumidity());
    }

}
