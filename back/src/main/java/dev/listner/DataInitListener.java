package dev.listner;


import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.springframework.beans.factory.annotation.Autowired;

import dev.enumeration.Role;
import dev.enumeration.Statut;
import dev.enumeration.Transport;
import dev.model.Mission;
import dev.model.Nature;
import dev.model.RoleUtilisateur;
import dev.repository.MissionRepo;
import dev.repository.NatureRepository;
import dev.repository.RoleUtilisateurRepo;
import dev.service.UtilisateurService;


@WebListener
public class DataInitListener implements ServletContextListener{
	
	@Autowired RoleUtilisateurRepo utilRepo;
	
	@Autowired UtilisateurService utilsiateurService;

	@Autowired MissionRepo missionRepo;
	
	@Autowired NatureRepository natureRepo;
	
	@Override
	public void contextInitialized(ServletContextEvent sce) {	
		RoleUtilisateur util1 = new RoleUtilisateur();
		util1.setMatricule("bd540e65");
		util1.setRole(Role.EMPLOYE);
		utilRepo.save(util1);
		
		RoleUtilisateur util2 = new RoleUtilisateur();
		util2.setMatricule("75e8048c");
		util2.setRole(Role.MANAGER);
		utilRepo.save(util2);
		
		RoleUtilisateur util3 = new RoleUtilisateur();
		util3.setMatricule("8b2d3ac7");
		util3.setRole(Role.ADMINISTRATEUR);
		utilRepo.save(util3);
		
		RoleUtilisateur util4 = new RoleUtilisateur();
		util4.setMatricule("6c8be60e");
		util4.setRole(Role.EMPLOYE);
		utilRepo.save(util4);

		Nature conseil = new Nature();
		conseil.setType("Conseil");
		conseil.setPrime(true);
		conseil.setTauxJournalierMoyen(200f);
		conseil.setPourcentagePrime(0.2f);
		natureRepo.save(conseil);

		Nature expertise = new Nature();
		expertise.setType("Expertise Technique");
		expertise.setPrime(true);
		expertise.setTauxJournalierMoyen(100f);
		expertise.setPourcentagePrime(0.15f);
		natureRepo.save(expertise);

		Nature formation = new Nature();
		formation.setType("Formation");
		formation.setPrime(true);
		formation.setTauxJournalierMoyen(150f);
		formation.setPourcentagePrime(0.35f);
		natureRepo.save(formation);

		Mission m1 = new Mission();
		m1.setUtilisateur(util1);
		m1.setDebut(LocalDate.now().plusDays(1));
		m1.setFin(LocalDate.now().plusMonths(1));
		m1.setStatut(Statut.INITIALE);
		m1.setVilleDepart("Lille");
		m1.setVilleArrivee("Nantes");
		m1.setNature(formation);
		m1.setTransport(Transport.TRAIN);
		missionRepo.save(m1);
		
		Mission m2 = new Mission();
		m2.setUtilisateur(util2);
		m2.setDebut(LocalDate.now().plusDays(1));
		m2.setFin(LocalDate.now().plusMonths(1));
		m2.setStatut(Statut.INITIALE);
		m2.setVilleDepart("Paris");
		m2.setVilleArrivee("New York");
		m2.setNature(conseil);
		m2.setTransport(Transport.AVION);
		missionRepo.save(m2);
		
		Mission m3 = new Mission();
		m3.setUtilisateur(util2);
		m3.setDebut(LocalDate.now().plusDays(1));
		m3.setFin(LocalDate.now().plusMonths(1));
		m3.setStatut(Statut.EN_ATTENTE_VALIDATION);
		m3.setVilleDepart("Nantes");
		m3.setVilleArrivee("Longcochon");
		m3.setNature(formation);
		m3.setTransport(Transport.COVOITURAGE);
		missionRepo.save(m3);
		
		Mission m4 = new Mission();
		m4.setUtilisateur(util2);
		m4.setDebut(LocalDate.now().plusDays(1));
		m4.setFin(LocalDate.now().plusMonths(1));
		m4.setStatut(Statut.EN_ATTENTE_VALIDATION);
		m4.setVilleDepart("Nantes");
		m4.setVilleArrivee("Bourré");
		m4.setNature(conseil);
		m4.setTransport(Transport.AVION);
		missionRepo.save(m4);
		
		
		Mission m5 = new Mission();
		m5.setUtilisateur(util2);
		m5.setDebut(LocalDate.now().plusDays(1));
		m5.setFin(LocalDate.now().plusMonths(1));
		m5.setStatut(Statut.EN_ATTENTE_VALIDATION);
		m5.setVilleDepart("Nantes");
		m5.setVilleArrivee("Corps-Nuds");
		m5.setNature(expertise);
		m5.setTransport(Transport.VOITURE_DE_SERVICE);
		missionRepo.save(m5);
		
		Mission m6 = new Mission();
		m6.setUtilisateur(util4);
		m6.setDebut(LocalDate.now().plusDays(1));
		m6.setFin(LocalDate.now().plusMonths(1));
		m6.setStatut(Statut.EN_ATTENTE_VALIDATION);
		m6.setVilleDepart("Nantes");
		m6.setVilleArrivee("Trécon");
		m6.setNature(conseil);
		m6.setTransport(Transport.TRAIN);
		missionRepo.save(m6);
		
		
		Mission m7 = new Mission();
		m7.setUtilisateur(util2);
		m7.setDebut(LocalDate.parse("2000-01-01"));
		m7.setFin(LocalDate.parse("2000-02-02"));
		m7.setStatut(Statut.VALIDEE);
		m7.setVilleDepart("Millau");
		m7.setVilleArrivee("Rodez");
		m7.setNature(conseil);
		m7.setTransport(Transport.TRAIN);
		missionRepo.save(m7);
		
		Mission m8 = new Mission();
		m8.setUtilisateur(util2);
		m8.setDebut(LocalDate.parse("2002-01-01"));
		m8.setFin(LocalDate.parse("2002-02-02"));
		m8.setStatut(Statut.VALIDEE);
		m8.setVilleDepart("Paris");
		m8.setVilleArrivee("Lens");
		m8.setNature(expertise);
		m8.setTransport(Transport.COVOITURAGE);
		missionRepo.save(m8);
		
		Mission m9 = new Mission();
		m9.setUtilisateur(util2);
		m9.setDebut(LocalDate.parse("2003-01-01"));
		m9.setFin(LocalDate.parse("2003-02-02"));
		m9.setStatut(Statut.VALIDEE);
		m9.setVilleDepart("Lyon");
		m9.setVilleArrivee("Lille");
		m9.setNature(formation);
		m9.setTransport(Transport.VOITURE_DE_SERVICE);
		missionRepo.save(m9);
		
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}

}
