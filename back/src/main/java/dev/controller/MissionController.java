package dev.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dev.enumeration.Statut;
import dev.enumeration.Transport;
import dev.model.Mission;
import dev.model.RoleUtilisateur;
import dev.repository.MissionRepo;
import dev.repository.NatureRepository;
import dev.repository.RoleUtilisateurRepo;

@RestController
public class MissionController {

	@Autowired
	private MissionRepo missionrepo;


	@Autowired
	RoleUtilisateurRepo roleRepo;

	@Autowired
	NatureRepository natureRepo;

	@GetMapping("/missions")
	// @CrossOrigin("*")
	public List<Mission> get() {

		return missionrepo.findAll();
	}
	
	
	@PutMapping("/missions")
	public void putMission(@RequestBody Mission mission) {
		missionrepo.save(mission);
	}

	@GetMapping("/missions/matricule/{matricule}")
	public List<Mission> getByMatricule(@PathVariable String matricule) {
		List<RoleUtilisateur> roles = roleRepo.findByMatricule(matricule);
		if (roles.size() == 1)
			return missionrepo.findByUtilisateur(roles.get(0));
		else
			return new ArrayList<Mission>();
	}

	@GetMapping("/transport")
	// @CrossOrigin("*")
	public Transport[] getTransport(@RequestParam(value = "transport", required=false)  String t){
		return Transport.values();
	}
	
	@GetMapping("/statut")
	// @CrossOrigin("*")
	public Statut[] getSatut(@RequestParam(value = "statut", required=false)  String s){
		return Statut.values();
	}
	
	@PostMapping("/missions")
//	@CrossOrigin("*")
	public void addMission(@RequestBody Mission mission, RoleUtilisateur user) {

		mission.setStatut(Statut.INITIALE);
		missionrepo.save(mission);

		
	}

	@DeleteMapping("/missions/{id}")
	
	public Map<String, String> deleteById(@PathVariable Integer id){
		
		 Map<String, String> reponse = new HashMap<>();
		if (missionrepo.exists(id)){
			missionrepo.delete(id);
			System.out.println("mission supprimé pour l'id" + id);
			reponse.put("message", "suppression mission ok");
		} else {
			reponse.put("message", "erreur suppression mission id invalide");
		}
		
		return reponse;
	}
	

	
}
