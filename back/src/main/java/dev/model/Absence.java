package dev.model;

import java.time.LocalDateTime;

import dev.enumeration.Statut;

public class Absence {
	private int id;
	private LocalDateTime debut;
	private LocalDateTime fin;
	private Statut statut;
	private String motif;
	private Utilisateur utilisateur;

	public Absence(LocalDateTime debut, LocalDateTime fin, Statut statut, String motif, Utilisateur utilisateur) {
		super();
		this.debut = debut;
		this.fin = fin;
		this.statut = statut;
		this.motif = motif;
		this.utilisateur = utilisateur;
	}

	public Absence() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDateTime getDebut() {
		return debut;
	}

	public void setDebut(LocalDateTime debut) {
		this.debut = debut;
	}

	public LocalDateTime getFin() {
		return fin;
	}

	public void setFin(LocalDateTime fin) {
		this.fin = fin;
	}

	public Statut getStatut() {
		return statut;
	}

	public void setStatut(Statut statut) {
		this.statut = statut;
	}

	public String getMotif() {
		return motif;
	}

	public void setMotif(String motif) {
		this.motif = motif;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

}
