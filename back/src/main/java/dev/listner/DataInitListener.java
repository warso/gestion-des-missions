package dev.listner;


import java.time.LocalDate;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.springframework.beans.factory.annotation.Autowired;

import dev.enumeration.Statut;
import dev.model.Mission;
import dev.model.RoleUtilisateur;
import dev.repository.MissionRepo;
import dev.repository.RoleUtilisateurRepo;



@WebListener
public class DataInitListener implements ServletContextListener{
	
	@Autowired RoleUtilisateurRepo utilRepo;

	@Autowired MissionRepo missionRepo;
	
	@Override
	public void contextInitialized(ServletContextEvent sce) {		
		RoleUtilisateur util = new RoleUtilisateur();
		util.setMatricule("toto");
		utilRepo.save(util);
		
		Mission m = new Mission();
		m.setDebut(LocalDate.now());
		m.setFin(LocalDate.now().plusMonths(1));
		m.setStatut(Statut.INITIALE);
		missionRepo.save(m);
		
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}

}
