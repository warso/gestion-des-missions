package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.model.Utilisateur;

public interface UtilisateurRepo extends JpaRepository<Utilisateur, Integer> {
}
