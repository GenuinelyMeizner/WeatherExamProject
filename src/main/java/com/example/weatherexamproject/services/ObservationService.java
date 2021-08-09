package com.example.weatherexamproject.services;

import com.example.weatherexamproject.models.Observation;
import com.example.weatherexamproject.models.Station;
import com.example.weatherexamproject.repositories.ObservationRepository;
import com.example.weatherexamproject.repositories.StationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ObservationService {
    private final ObservationRepository observationRepository;

    public void insertUpdateObservation(Observation observation) {
        observationRepository.save(observation);
    }

    public void deleteObservation(Long observationId) {
        observationRepository.deleteById(observationId);
    }

    public List<Observation> getAllObservations() {
        return observationRepository.findAll();
    }
}
