package dev.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

import dev.enumeration.Statut;
@Entity
public class Absence {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@JsonFormat(pattern = "yyyy/MM/dd")
	private LocalDateTime debut;
	@JsonFormat(pattern = "yyyy/MM/dd")
	private LocalDateTime fin;
	private Statut statut;
	private String motif;
	@OneToOne
	private RoleUtilisateur utilisateur;

	public Absence(LocalDateTime debut, LocalDateTime fin, Statut statut, String motif, RoleUtilisateur utilisateur) {
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

	public RoleUtilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(RoleUtilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

}
