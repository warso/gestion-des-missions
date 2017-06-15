package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.model.RoleUtilisateur;

public interface RoleUtilisateurRepo extends JpaRepository<RoleUtilisateur, Integer> {
}
