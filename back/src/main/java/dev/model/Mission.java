package dev.model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import dev.enumeration.Statut;
import dev.enumeration.Transport;

@Entity
public class Mission {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	private Utilisateur utilisateur;
	private LocalDateTime debut;
	private LocalDateTime fin;
	@ManyToOne
	private Nature nature;
	private String villeDepart;
	private String villeArrivee;
	// TODO mapping enum to string
	private Transport transport;
	// TODO mapping enum to string
	private Statut statut;
	@OneToMany
	private List<NoteDeFrais> notes;

	public Mission() {
		super();
	}

	public Mission(Utilisateur utilisateur, LocalDateTime debut, LocalDateTime fin, Nature nature, String villeDepart,
			String villeArrivee, Transport transport, Statut statut, List<NoteDeFrais> notes) {
		super();
		this.utilisateur = utilisateur;
		this.debut = debut;
		this.fin = fin;
		this.nature = nature;
		this.villeDepart = villeDepart;
		this.villeArrivee = villeArrivee;
		this.transport = transport;
		this.statut = statut;
		this.notes = notes;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
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

	public Nature getNature() {
		return nature;
	}

	public void setNature(Nature nature) {
		this.nature = nature;
	}

	public String getVilleDepart() {
		return villeDepart;
	}

	public void setVilleDepart(String villeDepart) {
		this.villeDepart = villeDepart;
	}

	public String getVilleArrivee() {
		return villeArrivee;
	}

	public void setVilleArrivee(String villeArrivee) {
		this.villeArrivee = villeArrivee;
	}

	public Transport getTransport() {
		return transport;
	}

	public void setTransport(Transport transport) {
		this.transport = transport;
	}

	public Statut getStatut() {
		return statut;
	}

	public void setStatut(Statut statut) {
		this.statut = statut;
	}

	public List<NoteDeFrais> getNotes() {
		return notes;
	}

	public void setNotes(List<NoteDeFrais> notes) {
		this.notes = notes;
	}

}
