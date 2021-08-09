package com.example.weatherexamproject.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ObservationController {

    @GetMapping("/")
    public String getIndex() {
        return "index";
    }
}
