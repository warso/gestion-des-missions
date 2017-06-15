package dev.listner;


import java.time.LocalDate;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.springframework.beans.factory.annotation.Autowired;

import dev.enumeration.Role;
import dev.enumeration.Statut;
import dev.model.Mission;
import dev.model.RoleUtilisateur;
import dev.repository.MissionRepo;
import dev.repository.RoleUtilisateurRepo;
import dev.service.PersonneService;
import dev.service.UtilisateurService;



@WebListener
public class DataInitListener implements ServletContextListener{
	
	@Autowired RoleUtilisateurRepo utilRepo;
	
	@Autowired UtilisateurService utilsiateurService;

	@Autowired MissionRepo missionRepo;
	
	@Override
	public void contextInitialized(ServletContextEvent sce) {	
		RoleUtilisateur util1 = new RoleUtilisateur();
		util1.setMatricule("bd540e65");
		util1.setRole(Role.MANAGER);
		utilRepo.save(util1);
		RoleUtilisateur util2 = new RoleUtilisateur();
		util2.setMatricule("75e8048c");
		util2.setRole(Role.MANAGER);
		utilRepo.save(util2);
		
		Mission m1 = new Mission();
		m1.setUtilisateur(util1);
		m1.setDebut(LocalDate.now());
		m1.setFin(LocalDate.now().plusMonths(1));
		m1.setStatut(Statut.INITIALE);
		m1.setVilleDepart("coucou m1");
		m1.setVilleArrivee("coucou m1");
		missionRepo.save(m1);
		
		Mission m2 = new Mission();
		m2.setUtilisateur(util2);
		m2.setDebut(LocalDate.now());
		m2.setFin(LocalDate.now().plusMonths(1));
		m2.setStatut(Statut.INITIALE);

		m2.setVilleDepart("coucou m2");
		m2.setVilleArrivee("coucou m2");
		missionRepo.save(m2);
		
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}

}
