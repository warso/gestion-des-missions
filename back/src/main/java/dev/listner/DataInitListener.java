package dev.listner;


import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.springframework.beans.factory.annotation.Autowired;

import dev.enumeration.Role;
import dev.enumeration.Statut;
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
		
		
		Nature nature1 = new Nature();
		nature1.setType("Conseil");
		natureRepo.save(nature1);
		
		Nature nature2 = new Nature();
		nature2.setType("Expertise Technique");
		natureRepo.save(nature2);
		
		Nature nature3 = new Nature();
		nature3.setType("Formation");
		natureRepo.save(nature3);
		
		Mission m1 = new Mission();
		m1.setUtilisateur(util1);
		m1.setDebut(LocalDateTime.now());
		m1.setFin(LocalDateTime.now().plusMonths(1));
		m1.setStatut(Statut.INITIALE);
		m1.setVilleDepart("coucou m1");
		m1.setVilleArrivee("coucou m1");
		missionRepo.save(m1);
		
		Mission m2 = new Mission();
		m2.setUtilisateur(util2);
		m2.setDebut(LocalDateTime.now());
		m2.setFin(LocalDateTime.now().plusMonths(1));
		m2.setStatut(Statut.INITIALE);
		m2.setVilleDepart("coucou m2");
		m2.setVilleArrivee("coucou m2");
		missionRepo.save(m2);
		
		Mission m3 = new Mission();
		m3.setUtilisateur(util2);
		m3.setDebut(LocalDateTime.now());
		m3.setFin(LocalDateTime.now().plusMonths(1));
		m3.setStatut(Statut.EN_ATTENTE_VALIDATION);
		m3.setVilleDepart("coucou m3");
		m3.setVilleArrivee("coucou m3");
		missionRepo.save(m3);
		
		Mission m4 = new Mission();
		m4.setUtilisateur(util2);
		m4.setDebut(LocalDateTime.now());
		m4.setFin(LocalDateTime.now().plusMonths(1));
		m4.setStatut(Statut.EN_ATTENTE_VALIDATION);
		m4.setVilleDepart("coucou m4");
		m4.setVilleArrivee("coucou m4");
		missionRepo.save(m4);
		
		
		Mission m5 = new Mission();
		m5.setUtilisateur(util2);
		m5.setDebut(LocalDateTime.now());
		m5.setFin(LocalDateTime.now().plusMonths(1));
		m5.setStatut(Statut.EN_ATTENTE_VALIDATION);
		m5.setVilleDepart("coucou m5");
		m5.setVilleArrivee("coucou m5");
		missionRepo.save(m5);
		
		Mission m6 = new Mission();
		m6.setUtilisateur(util4);
		m6.setDebut(LocalDateTime.now());
		m6.setFin(LocalDateTime.now().plusMonths(1));
		m6.setStatut(Statut.EN_ATTENTE_VALIDATION);
		m6.setVilleDepart("coucou m6");
		m6.setVilleArrivee("coucou m6");
		missionRepo.save(m6);
		
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}

}
