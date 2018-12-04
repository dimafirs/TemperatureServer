package edu.iss.gitcloneteam.weatherobserver.controllers;

import edu.iss.gitcloneteam.weatherobserver.model.Measurement;
import edu.iss.gitcloneteam.weatherobserver.services.MeasurementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;

@Controller
@RequestMapping("device/measurement/")
public class MeasurementFromDeviceController {

    @Autowired
    @Qualifier("MeasurementServiceImpl")
    private MeasurementService measurementService;

    @GetMapping("/new")
    public Integer addNewMeasurement(
            @RequestParam("temp") int temperature,
            @RequestParam("pres") int pressure
            ) {
        Measurement measurement = new Measurement();
        measurement.setTemperature(temperature);
        measurement.setPressure(pressure);
        // later device will sent this time
        measurement.setMeasurementTime(LocalDateTime.now());
        measurementService.addMeasurement(measurement);
        // return successful result of saving
        return 0;
    }

}
