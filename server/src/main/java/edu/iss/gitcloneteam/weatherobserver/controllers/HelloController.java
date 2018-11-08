package edu.iss.gitcloneteam.weatherobserver.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin
@RestController
public class HelloController {

    @RequestMapping("/")
    public String index() {
        return "WeatherObserverFromServer";
    }
}
