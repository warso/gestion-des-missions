package dev.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.enumeration.Statut;
import dev.enumeration.Transport;
import dev.model.Mission;
import dev.model.RoleUtilisateur;

public interface MissionRepo extends JpaRepository<Mission, Integer> {
	
	List<Mission> findByUtilisateur( RoleUtilisateur utilisateur );
	List<Mission> findByUtilisateurAndStatut( RoleUtilisateur utilisateur, Statut statut );
	List<Mission> findById( int id );
}
