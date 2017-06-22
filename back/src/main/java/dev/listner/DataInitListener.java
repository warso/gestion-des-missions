package dev.listner;


import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.springframework.beans.factory.annotation.Autowired;

import dev.enumeration.NatureNoteDeFrais;
import dev.enumeration.Role;
import dev.enumeration.Statut;
import dev.enumeration.Transport;
import dev.model.Mission;
import dev.model.Nature;
import dev.model.NoteDeFrais;
import dev.model.RoleUtilisateur;
import dev.repository.MissionRepo;
import dev.repository.NatureRepository;
import dev.repository.NoteDeFraisRepo;
import dev.repository.RoleUtilisateurRepo;
import dev.service.UtilisateurService;
import scala.annotation.meta.setter;


@WebListener
public class DataInitListener implements ServletContextListener{
	
	@Autowired RoleUtilisateurRepo utilRepo;
	
	@Autowired UtilisateurService utilsiateurService;

	@Autowired MissionRepo missionRepo;
	
	@Autowired NatureRepository natureRepo;
	
	@Autowired NoteDeFraisRepo noteFraisRepo;
	
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
		m7.setStatut(Statut.REJETEE);
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
		
		
		/*Géneration de mission aléatoire pour avoir de la donnée et pouvoir travailler correctement. (faire varier le i pour le nombre de donnée)*/
		int i = 1000;
		while (i > 0){
			i--;
			
			RoleUtilisateur util;
			double rand = Math.random();
			if(rand < 0.25)
				util = util1;
			else if(rand < 0.5)
				util = util2;
			else if(rand < 0.75)
				util = util3;
			else
				util = util4;
			
			int annee = (int)((Math.random()*18)+2000);
			int mois = (int) ((Math.random()*11)+1);
			String stringMois = "";
			if(mois < 10)
				stringMois = "0";
			String stringMoisFin = "";
				if(mois < 9)
					stringMoisFin = "0";
			Nature nature;
			Double rand2 = Math.random();
			if(rand2 < 0.33)
				nature = expertise;
			else if(rand2 < 0.66)
				nature = formation;
			else
				nature = conseil;
			
			
			Mission m = new Mission();
			m.setUtilisateur(util);
			m.setDebut(LocalDate.parse(annee+"-"+stringMois+mois+"-10"));
			m.setFin(LocalDate.parse(annee+"-"+stringMoisFin+(mois+1)+"-10"));
			m.setStatut(Statut.VALIDEE);
			m.setVilleDepart("Lyon");
			m.setVilleArrivee("Lille");
			m.setNature(nature);
			m.setTransport(Transport.VOITURE_DE_SERVICE);
			missionRepo.save(m);
		}
		NoteDeFrais n1 = new NoteDeFrais();
		n1.setDate(LocalDate.parse("2017-01-01"));
		n1.setMisson(m1);
		n1.setMontant((float) 2145.50);
		n1.setNature(NatureNoteDeFrais.AVION);
		noteFraisRepo.save(n1);
		
		NoteDeFrais n2 = new NoteDeFrais();
		n2.setDate(LocalDate.parse("2003-01-01"));
		n2.setMisson(m1);
		n2.setMontant((float) 2500.50);
		n2.setNature(NatureNoteDeFrais.HOTEL);
		noteFraisRepo.save(n2);
		
		NoteDeFrais n3 = new NoteDeFrais();
		n3.setDate(LocalDate.parse("2020-01-01"));
		n3.setMisson(m1);
		n3.setMontant((float) 1405.50);
		n3.setNature(NatureNoteDeFrais.AUTRE);
		noteFraisRepo.save(n3);
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}

}
