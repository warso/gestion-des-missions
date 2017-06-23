package dev.controller;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import dev.model.Utilisateur;
import dev.repository.MissionRepo;
import dev.repository.NatureRepository;
import dev.repository.RoleUtilisateurRepo;
import dev.service.UtilisateurService;

@RestController
public class MissionController {

	@Autowired
	private MissionRepo missionRepo;

	@Autowired
	private UtilisateurService utilsService;

	@Autowired
	RoleUtilisateurRepo roleRepo;

	@Autowired
	NatureRepository natureRepo;

	Logger logger = LoggerFactory.getLogger(MissionController.class);

	@GetMapping("/missions")
	public List<Mission> get() {

		return missionRepo.findAll();
	}

	/** Modification de la mission */
	@PutMapping("/missions")
	public void putMission(@RequestBody Mission mission) {
		/* recuperation d'une mission de la base de donnée par son id */
		Mission m = missionRepo.findOne(mission.getId());
		/*
		 * permet de faire le changement des champs et leur persistance si notre
		 * objet n'est pas transient(vide)
		 */
		if (m != null) {
			m.setId(mission.getId());
			m.setDebut(mission.getDebut());
			m.setFin(mission.getFin());
			m.setVilleDepart(mission.getVilleDepart());
			m.setVilleArrivee(mission.getVilleArrivee());
			m.setStatut(mission.getStatut());
			m.setTransport(mission.getTransport());

			missionRepo.save(m);
			logger.info("Modification de la mission avec l'id: " + mission.getId() + " reussite");
		} else
			logger.info("Modification echoué");
	}

	/*
	 * Retourne une liste mission par matricule
	 */

	@GetMapping("/missions/matricule/{matricule}")
	public List<Mission> getByMatricule(@PathVariable String matricule) {
		List<RoleUtilisateur> roles = roleRepo.findByMatricule(matricule);
		if (roles.size() == 1)
			return missionRepo.findByUtilisateur(roles.get(0));
		else
			return new ArrayList<Mission>();
	}

	@GetMapping("/missions/status/{status}/{matricule}")
	public List<Mission> getByStatusAndMatricule(@PathVariable String status, @PathVariable String matricule) {
		List<RoleUtilisateur> roles = roleRepo.findByMatricule(matricule);
		if (roles.size() == 1) {
			if (status.equals("ECHUE"))
				return missionRepo.findByUtilisateurAndStatut(roles.get(0), Statut.ECHUE);
			else

				return missionRepo.findByUtilisateur(roles.get(0));
		} else
			return new ArrayList<Mission>();
	}

	/**
	 * Génère la liste des missions de tous les subalternes d'un employé
	 * Les missions de cette employé sont également dans la liste
	 * @param matricule Defini l'employé en question
	 * @return la liste des missions
	 */
	@GetMapping("/missions/subalternes/{matricule}")
	public List<Mission> getBySubalternes(@PathVariable String matricule) {
		List<RoleUtilisateur> roles = roleRepo.findByMatricule(matricule);
		List<Utilisateur> util = utilsService.findByMatricule(matricule);

		// ça mérite p'tet un refactoring ici :D
		if (roles.size() >= 1) {
			List<Mission> res = missionRepo.findByUtilisateur(roles.get(0));

			if (util.size() >= 1) {
				List<String> subs = util.get(0).getSubalternes();
				for (String sub : subs) {
					List<RoleUtilisateur> roleSub = roleRepo.findByMatricule(sub);
					if (roleSub.size() >= 1)
						res.addAll(missionRepo.findByUtilisateur(roleSub.get(0)));
				}
			}
			return res;
		} else
			return new ArrayList<Mission>();

	}

	/*
	 * Recupére un tableau de transport à l'URL suivant /transport
	 */

	@GetMapping("/transport")
	// @CrossOrigin("*")
	public Transport[] getTransport(@RequestParam(value = "transport", required = false) String t) {
		return Transport.values();
	}

	/*
	 * Recupére un tableau de statut à l'URL suivant /statut
	 */

	@GetMapping("/statut")
	// @CrossOrigin("*")
	public Statut[] getSatut(@RequestParam(value = "statut", required = false) String s) {
		return Statut.values();
	}

	/*
	 * Insère une nouvelle mission en base de données
	 */

	@PostMapping("/missions")
	// @CrossOrigin("*")
	public void addMission(@RequestBody Mission mission) {

		mission.setStatut(Statut.INITIALE);
		mission.setUtilisateur(roleRepo.findByMatricule(mission.getUtilisateur().getMatricule()).get(0));
		LocalDate debutMission = mission.getDebut();
		LocalDate finMission = mission.getFin();
		Mission miss = missionRepo.findAll().get(0);

		if (debutMission.getDayOfYear() <= LocalDate.now().getDayOfYear()) {
			logger.info(" Debut aujourd'hui");
		}

		else if (debutMission.getDayOfYear() >= finMission.getDayOfYear()) {
			logger.info("Fin avant debut ou Fin = debut");
		}

		if ((debutMission.isAfter(LocalDate.now()))
				&& ((debutMission.isBefore(finMission)) || (debutMission.isEqual(finMission)))) {

			if (mission.getTransport() == Transport.AVION) {
				finMission = debutMission.plusDays(7);
			}
			missionRepo.save(mission);

		}
	}

	/*
	 * Supprime une mission à partir de son Id
	 */

	/** Suppression de mission par id */
	@DeleteMapping("/missions/{id}")

	public Map<String, String> deleteById(@PathVariable Integer id) {

		Map<String, String> reponse = new HashMap<>();
		if (missionRepo.exists(id)) {
			missionRepo.delete(id);
			logger.info("mission supprimé pour l'id" + id);
			reponse.put("message", "suppression mission ok");
		} else {
			reponse.put("message", "erreur suppression mission id invalide");
		}
		;
		return reponse;
	}

	/** Méthode de recupération d'une mission par son id */
	@GetMapping("/missions/id/{id}")
	public Mission getMissionById(@PathVariable Integer id) {
		return missionRepo.findOne(id);
	}

}
