package com.example.weatherexamproject.repositories;

import com.example.weatherexamproject.models.Observation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ObservationRepository extends JpaRepository<Observation, Long> {
}
