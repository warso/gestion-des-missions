package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.model.Nature;

public interface NatureRepository extends JpaRepository<Nature, Integer> {

}
