package dev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import dev.model.Mission;
import dev.model.Utilisateur;
import dev.repository.MissionRepo;
import dev.service.UtilisateurService;

@RestController
public class UtilisateurController {

	@Autowired
	private UtilisateurService utilsService;

	@GetMapping("/utilisateurs")
//	@CrossOrigin("*")
	public List<Utilisateur> getAll() {
 
		return utilsService.findAll();
	}
	
	@GetMapping("/utilisateurs/{matricule}")
//	@CrossOrigin("*")
	public List<Utilisateur> getByMatricule(@PathVariable String matricule) {
 
		return utilsService.findByMatricule(matricule);
	}
}