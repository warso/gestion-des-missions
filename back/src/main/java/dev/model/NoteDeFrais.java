package dev.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class NoteDeFrais {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	private Mission misson;
	private LocalDateTime date;
	private float montant;
	@ManyToOne
	private Nature nature;
	private String commentaire;

	public NoteDeFrais() {
		super();
	}
	// TODO example
	public NoteDeFrais(Mission misson, LocalDateTime date, float montant, Nature nature, String commentaire) {
		super();
		this.misson = misson;
		this.date = date;
		this.montant = montant;
		this.nature = nature;
		this.commentaire = commentaire;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Mission getMisson() {
		return misson;
	}

	public void setMisson(Mission misson) {
		this.misson = misson;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public float getMontant() {
		return montant;
	}

	public void setMontant(float montant) {
		this.montant = montant;
	}

	public Nature getNature() {
		return nature;
	}

	public void setNature(Nature nature) {
		this.nature = nature;
	}

	public String getCommentaire() {
		return commentaire;
	}

	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}

}
