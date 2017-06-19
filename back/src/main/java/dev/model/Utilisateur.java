package dev.model;


import java.time.LocalDateTime;
import java.util.List;



import com.fasterxml.jackson.annotation.JsonFormat;

import dev.enumeration.Role;

public class Utilisateur {
	private String matricule;

	private String nom;
	private String prenom;

	private String email;

	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDateTime dateNaissance;

	private String sexe;
	private String address;

	private String password;

	private List<String> subalternes;

	private String departement;

	private Role role;

	public Utilisateur() {
		super();
	}

	public Utilisateur(Personne persone, RoleUtilisateur role) {
		super();
	}

	public Utilisateur(Personne persone, Role role) {
		super();
		
		this.matricule = persone.matricule;
		this.nom = persone.nom;
		this.prenom = persone.prenom;
		this.email = persone.email;
//		this.dateNaissance = LocalDateTime.parse(persone.dateNaissance);
		this.sexe = persone.sexe;
		this.address = persone.address;
		this.password = persone.password;
		this.subalternes = persone.subalternes;
		this.departement = persone.departement;
		this.role = role;
		
	}
	
	

	public Utilisateur(String matricule, String nom, String prenom, String email, LocalDateTime dateNaissance,
			String sexe, String address, String password, List<String> subalternes, String departement, Role role) {
		super();

	}

	public List<String> getSubalternes() {
		return subalternes;
	}

	public void setSubalternes(List<String> subalternes) {
		this.subalternes = subalternes;
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

}
