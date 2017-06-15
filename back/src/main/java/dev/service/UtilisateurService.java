package dev.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.enumeration.Role;
import dev.model.Personne;
import dev.model.Utilisateur;
import dev.repository.RoleUtilisateurRepo;

@Service
public class UtilisateurService {

	@Autowired
	PersonneService personneService;

	@Autowired
	RoleUtilisateurRepo roleRepo;

	public List<Utilisateur> findAll() {
		List<Utilisateur> list = new ArrayList<>();
		List<Personne> personnes = personneService.getUtilisateurs();

		personnes.stream().forEach(p -> {
			// TODO gestion des roles
			list.add(new Utilisateur(p, Role.EMPLOYE));
		});

		return list;

	}

	public List<Utilisateur> findByMatricule(String matricule) {
		List<Utilisateur> list = new ArrayList<>();
		List<Personne> personnes = personneService.getUtilisateurs();

		personnes.stream().forEach(p -> {
			if (p.matricule.equals(matricule))
				// TODO gestion des roles
				list.add(new Utilisateur(p, Role.EMPLOYE));
		});

		return list;

	}

	public List<Utilisateur> findByEmail(String email) {
		
		// creation liste vide d'utilisateurs
		List<Utilisateur> list = new ArrayList<>();
		// recuperation de toutes les personnes
		List<Personne> personnes = personneService.getUtilisateurs();

		// je parcours la liste des personnes et j'essaie de voir si ça match
		// entre l' {email} du @GetMapping("/utilisateurs/email/{email}") dans
		// le controller
		personnes.stream().forEach(p -> {
			if (p.email.equals(email))
				// TODO gestion des roles
				// si ça match il crée un nouvel utilisateur et l'ajoute dans la
				// liste d'utilisateurs
				list.add(new Utilisateur(p, Role.EMPLOYE));
		});

		return list;

	}

}
