package com.example.weatherexamproject.restcontrollers;

import com.example.weatherexamproject.models.Station;
import com.example.weatherexamproject.repositories.StationRepository;
import com.example.weatherexamproject.services.StationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin("*")
@AllArgsConstructor
public class StationRestController {

    private final StationService stationService;

    @GetMapping(value = "/get-all-stations")
    @ResponseStatus(HttpStatus.OK)
    public List<Station> getAllStations() {
        return stationService.getAllStations();
    }
}
