package com.example.weatherexamproject.services;

import com.example.weatherexamproject.models.Station;
import com.example.weatherexamproject.repositories.StationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class StationService {
    private final StationRepository stationRepository;

    public List<Station> getAllStations() {
        return stationRepository.findAll();
    }
}
