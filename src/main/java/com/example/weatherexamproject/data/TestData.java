package com.example.weatherexamproject.data;

import com.example.weatherexamproject.models.Observation;
import com.example.weatherexamproject.models.Station;
import com.example.weatherexamproject.repositories.ObservationRepository;
import com.example.weatherexamproject.repositories.StationRepository;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class TestData {

    private final ObservationRepository observationRepository;

    private final StationRepository stationRepository;

    @Bean
    public void insertDefaultData() {
        Station station1 = new Station("06151");
        stationRepository.save(station1);
        Station station2 = new Station("06136");
        stationRepository.save(station2);
        Station station3 = new Station("06184");
        stationRepository.save(station3);
        Station station4 = new Station("06168");
        stationRepository.save(station4);

        Observation observation1 = new Observation(LocalDateTime.parse("2020-07-30T18:00:00"), LocalDateTime.parse("2021-01-19T23:16"), 15.7, station1);
        observationRepository.save(observation1);
        Observation observation2 = new Observation(LocalDateTime.parse("2020-07-19T18:00:00"), LocalDateTime.parse("2021-01-19T23:15"), 25.1, station2);
        observationRepository.save(observation2);
    }
}
