package com.example.weatherexamproject.restcontrollers;

import com.example.weatherexamproject.models.Observation;
import com.example.weatherexamproject.models.Station;
import com.example.weatherexamproject.repositories.StationRepository;
import com.example.weatherexamproject.services.ObservationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin("*")
@AllArgsConstructor
public class ObservationRestController {

    private final ObservationService observationService;

    @PostMapping(value = "/create-observation", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public void postObservation(@RequestBody Observation observation) {
        observationService.insertUpdateObservation(observation);
    }

    @PutMapping(value = "/update-observation/{observationId}")
    @ResponseStatus(HttpStatus.OK)
    public void putObservation(@RequestBody Observation observation) {
        observationService.insertUpdateObservation(observation);
    }

    @DeleteMapping(value = "/delete-observation/{observationId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteObservation(@PathVariable Long observationId) {
        observationService.deleteObservation(observationId);
    }

    @GetMapping(value = "/get-all-observations")
    @ResponseStatus(HttpStatus.OK)
    public List<Observation> getAllObservations() {
        return observationService.getAllObservations();
    }
}
