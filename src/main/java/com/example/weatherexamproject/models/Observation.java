package com.example.weatherexamproject.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name = "observations")
public class Observation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long observationId;
    private LocalDateTime observationDateTime;
    private LocalDateTime registrationDateTime;
    private double temperature;

    @ManyToOne
    @JoinColumn(name = "stationId")
    private Station station;

    public Observation(LocalDateTime observationDateTime, LocalDateTime registrationDateTime, double temperature, Station station) {
        this.observationDateTime = observationDateTime;
        this.registrationDateTime = registrationDateTime;
        this.temperature = temperature;
        this.station = station;
    }
}
