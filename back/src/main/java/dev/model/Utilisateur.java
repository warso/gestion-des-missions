package dev.model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import dev.enumeration.Role;

@Entity
public class Utilisateur {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String matricule;

	private String nom;
	private String prenom;

	private String email;

	private LocalDateTime dateNaissance;
	private String sexe;
	private String address;

	private String password;

	@OneToMany
	private List<Utilisateur> subalternes;
	
	private String departement;

	@Enumerated(EnumType.STRING)
	private Role role;
	
	@OneToMany
	private List<Mission> missions;
	@OneToMany
	private List<Absence> absences;

	public Utilisateur() {
		super();
	}
	
	public Utilisateur(Personne personne, Role role) {
		this.matricule = personne.matricule;
		this.nom = personne.nom;
		this.prenom = personne.prenom;
		this.email = personne.email;
		this.dateNaissance = LocalDateTime.parse(personne.dateNaissance);
		this.sexe = personne.sexe;
		this.address = personne.address;
		this.departement = personne.departement;
		
		this.role = role;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDateTime getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(LocalDateTime dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public String getSexe() {
		return sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public List<Utilisateur> getSubalternes() {
		return subalternes;
	}

	public void setSubalternes(List<Utilisateur> subalternes) {
		this.subalternes = subalternes;
	}

	public String getDepartement() {
		return departement;
	}

	public void setDepartement(String departement) {
		this.departement = departement;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public List<Mission> getMissions() {
		return missions;
	}

	public void setMissions(List<Mission> missions) {
		this.missions = missions;
	}

	public List<Absence> getAbsences() {
		return absences;
	}

	public void setAbsences(List<Absence> absences) {
		this.absences = absences;
	}

}
