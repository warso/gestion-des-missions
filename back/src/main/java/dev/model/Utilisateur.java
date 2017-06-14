package dev.model;

import java.util.List;

import javax.persistence.Entity;
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
	private String login;
	private String matricule;
	private String motDepasse;

	// TODO changer type enum pour l'affichage en string
	private Role role;
	@OneToMany
	private List<Mission> missions;
	@OneToMany
	private List<Absence> absences;

	public Utilisateur() {
		super();
	}

	public Utilisateur(String login, String matricule, String motDepasse, Role role, List<Mission> missions,
			List<Absence> absences) {
		super();
		this.login = login;
		this.matricule = matricule;
		this.motDepasse = motDepasse;
		this.role = role;
		this.missions = missions;
		this.absences = absences;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public String getMotDepasse() {
		return motDepasse;
	}

	public void setMotDepasse(String motDepasse) {
		this.motDepasse = motDepasse;
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
