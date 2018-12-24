package edu.iss.gitcloneteam.weatherobserver.controllers;

import edu.iss.gitcloneteam.weatherobserver.model.Measurement;
import edu.iss.gitcloneteam.weatherobserver.services.MeasurementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;

@Controller
@RequestMapping("device/measurement/")
public class MeasurementFromDeviceController {

    @Autowired
    @Qualifier("MeasurementServiceImpl")
    private MeasurementService measurementService;

    @PostMapping("/new")
    @ResponseBody
    public String addNewMeasurement(
            HttpServletRequest httpServletRequest,
            HttpServletResponse httpServletResponse
            ) {
        Measurement measurement = new Measurement();
        measurement.setTemperature(Integer.parseInt(httpServletRequest.getParameter("temperature")));
        measurement.setHumidity(Integer.parseInt(httpServletRequest.getParameter("humidity")));
        measurement.setMeasurementTime(LocalDateTime.now());
        measurementService.addMeasurement(measurement);
        // return successful result of saving
        return "{\"message\":measurement was successfully added}";
    }

}
