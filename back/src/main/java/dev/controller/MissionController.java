package dev.controller;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import dev.model.Mission;
import dev.model.RoleUtilisateur;
import dev.repository.MissionRepo;
import dev.repository.RoleUtilisateurRepo;

@RestController
public class MissionController {

	@Autowired
	private MissionRepo missionrepo;

	@Autowired
	RoleUtilisateurRepo roleRepo;

	@GetMapping("/missions")
	public List<Mission> get() {

		return missionrepo.findAll();
	}

	@GetMapping("/missions/matricule/{matricule}")
	public List<Mission> getByMatricule(@PathVariable String matricule) {
		List<RoleUtilisateur> roles = roleRepo.findByMatricule(matricule);
		if (roles.size() == 1)
			return missionrepo.findByUtilisateur(roles.get(0));
		else
			return new ArrayList<Mission>();
	}
}