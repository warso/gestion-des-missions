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
	
	@Autowired PersonneService personneService;
	
	@Autowired RoleUtilisateurRepo roleRepo;
	
	
	public List<Utilisateur>findAll() {
		List<Utilisateur> list = new ArrayList<>();
		List<Personne> personnes = personneService.getUtilisateurs();
	
		
		personnes.stream()
		.forEach(p->{
//			TODO gestion des roles
			list.add(new Utilisateur(p, Role.EMPLOYE));
			}
		);
		
		return list;
		
	}
	
	public List<Utilisateur> findByMatricule(String matricule) {
		List<Utilisateur> list = new ArrayList<>();
		List<Personne> personnes = personneService.getUtilisateurs();
		
		personnes.stream()
		.forEach(p->{
			if(p.matricule.equals(matricule))
//			TODO gestion des roles
				list.add(new Utilisateur(p, Role.EMPLOYE));
			}
		);
		
		
		return list;
		
	}

}
