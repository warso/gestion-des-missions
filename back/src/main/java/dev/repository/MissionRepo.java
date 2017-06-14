package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.model.Mission;

public interface MissionRepo extends JpaRepository<Mission, Integer> {
}
