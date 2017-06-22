package dev.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

import dev.enumeration.NatureNoteDeFrais;

@Entity
public class NoteDeFrais {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
/*Plusieurs note de frais pour une seul mission*/
	@ManyToOne
	private Mission misson;
	@JsonFormat(pattern = "yyyy/MM/dd")
	private LocalDate date;
	private float montant;
	@Enumerated(EnumType.STRING)
	private NatureNoteDeFrais nature;
	private String commentaire;

	public NoteDeFrais() {
		super();
	}
	// TODO example
	public NoteDeFrais(Mission misson, LocalDate date, float montant, NatureNoteDeFrais nature, String commentaire) {
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

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate localDate) {
		this.date = localDate;
	}

	public float getMontant() {
		return montant;
	}

	public void setMontant(float montant) {
		this.montant = montant;
	}

	public NatureNoteDeFrais getNature() {
		return nature;
	}

	public void setNature(NatureNoteDeFrais nature) {
		this.nature = nature;
	}

	public String getCommentaire() {
		return commentaire;
	}

	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}

}
