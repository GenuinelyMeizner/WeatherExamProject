package com.example.weatherexamproject.repositories;

import com.example.weatherexamproject.models.Station;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StationRepository extends JpaRepository<Station, Long> {
}
