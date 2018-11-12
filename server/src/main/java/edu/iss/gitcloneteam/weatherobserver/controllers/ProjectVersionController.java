package edu.iss.gitcloneteam.weatherobserver.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/version")
public class ProjectVersionController {

    @GetMapping("/current")
    public String getCurrentProjectVersion(){
        // stub
        return "1.0.0";
    }

}
