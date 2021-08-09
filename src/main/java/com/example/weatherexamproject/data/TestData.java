package com.example.weatherexamproject.data;

import com.example.weatherexamproject.models.Observation;
import com.example.weatherexamproject.models.Station;
import com.example.weatherexamproject.repositories.ObservationRepository;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class TestData {

    private final ObservationRepository observationRepository;

    @Bean
    public void insertDefaultData() {
        Station station1 = new Station("06079");
        Observation observation1 = new Observation(LocalDateTime.parse("2020-07-30T18:00:00"), LocalDateTime.parse("2021-01-19T23:16"), 15.7, station1);
        observationRepository.save(observation1);

        Station station2 = new Station("06188");
        Observation observation2 = new Observation(LocalDateTime.parse("2020-07-19T18:00:00"), LocalDateTime.parse("2021-01-19T23:15"), 25.1, station2);
        observationRepository.save(observation2);
    }
}
