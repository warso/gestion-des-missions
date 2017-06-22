package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.model.NoteDeFrais;

public interface NoteDeFraisRepo extends JpaRepository<NoteDeFrais, Integer> {

}
