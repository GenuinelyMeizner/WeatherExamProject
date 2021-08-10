package com.example.weatherexamproject.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name = "stations")
public class Station {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stationId;
    private String stationCode;

    @OneToMany(mappedBy = "station")
    @JsonBackReference
    Set<Observation> observations = new HashSet<>();

    public Station(String stationCode) {
        this.stationCode = stationCode;
    }
}
