package dev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import dev.model.Utilisateur;

import dev.service.UtilisateurService;

@RestController
public class UtilisateurController {

	@Autowired
	private UtilisateurService utilsService;

	@GetMapping("/utilisateurs")
//	@CrossOrigin("*")
	public List<Utilisateur> getAll(@RequestParam(value = "email", required=false)  String email) {
 
		return utilsService.findAll();
	}
	
	@GetMapping("/utilisateurs/matricule/{matricule}")
//	@CrossOrigin("*")
	public List<Utilisateur> getByMatricule(@PathVariable String matricule) {
 
		return utilsService.findByMatricule(matricule);
	}
	
	@GetMapping("/utilisateurs/email/")
	public List<Utilisateur> getByEmail(@RequestParam(value = "email")  String email) {
 
		return utilsService.findByEmail(email);
	}
	
	
}