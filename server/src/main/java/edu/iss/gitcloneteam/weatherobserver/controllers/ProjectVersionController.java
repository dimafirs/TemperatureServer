package edu.iss.gitcloneteam.weatherobserver.controllers;

import edu.iss.gitcloneteam.weatherobserver.utils.ProjectVersionReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/version")
public class ProjectVersionController {

    private ProjectVersionReader projectVersionReader;

    @Autowired
    public ProjectVersionController(ProjectVersionReader projectVersionReader) {
        this.projectVersionReader = projectVersionReader;
    }

    @GetMapping("/current")
    public String getCurrentProjectVersion(){
        String currentVersion = projectVersionReader.readVersion();
        if (currentVersion == null) {
            currentVersion = ProjectVersionReader.DEFAULT_VERSION;
        }
        return "{\"version\":\"" + currentVersion + "\"}";
    }

}
