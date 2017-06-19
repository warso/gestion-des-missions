package dev.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.model.RoleUtilisateur;

public interface RoleUtilisateurRepo extends JpaRepository<RoleUtilisateur, Integer> {
	
	List<RoleUtilisateur> findByMatricule( String Matricule);
	
}
