package dev.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dev.enumeration.NatureNoteDeFrais;
import dev.model.Mission;
import dev.model.NoteDeFrais;
import dev.repository.MissionRepo;
import dev.repository.NoteDeFraisRepo;

@RestController
public class NoteDeFraisController {

	@Autowired
	NoteDeFraisRepo noteDeFraisRepos;
	@Autowired
	MissionRepo missionRepos;

	/*
	 * Recuperation de la liste de toute les notes de frais en abses de donnée
	 */
	@GetMapping("/frais")
	public List<NoteDeFrais> get() {

		return noteDeFraisRepos.findAll();
	}

	/* Recuperaiton d'une note de frais en fonction de son id */
	@GetMapping("/frais/id/{id}")
	public NoteDeFrais getNoteDeFraisById(@PathVariable Integer id) {

		return noteDeFraisRepos.findOne(id);

	}
	/*
	 * - Angular envoie un objet en Json vers L'Api rest - L'API Rest va voir
	 * elle notre objet arrive avec quel verbe (get, put, post ...) et il va
	 * chercher dans Spring au controller(grâce au mapping url fait) ou se
	 * trouve la méthode correspondant au verbe. - Une fois la methode dans le
	 * controller trouver, Spring transforme notre objet json en classe java -
	 * puis la persistance est faite grâce ici aux annotations Spring Jpa
	 */

	/**
	 * Recupération de l'objet Json, venant de l'api rest (liens entre spring et
	 * angular), où cette objet est envoyé depuis angular avecun post en Json
	 */
	@PostMapping("/frais")
	public void addNoteDeFrais(@RequestBody NoteDeFrais noteDeFrais) {

		noteDeFraisRepos.save(noteDeFrais);

	}

}
