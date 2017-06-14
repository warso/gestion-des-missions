package dev.listner;


import java.time.LocalDateTime;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.springframework.beans.factory.annotation.Autowired;

import dev.enumeration.Statut;
import dev.model.Mission;
import dev.model.Utilisateur;
import dev.repository.MissionRepo;
import dev.repository.UtilisateurRepo;



@WebListener
public class DataInitListener implements ServletContextListener{
	
	@Autowired UtilisateurRepo utilRepo;

	@Autowired MissionRepo missionRepo;
	
	@Override
	public void contextInitialized(ServletContextEvent sce) {		
		Utilisateur util = new Utilisateur();
		util.setMatricule("toto");
		util.setSexe("tropbien");
		utilRepo.save(util);
		
		Mission m = new Mission();
		m.setDebut(LocalDateTime.now());
		m.setFin(LocalDateTime.now().plusMonths(1));
		m.setStatut(Statut.INITIALE);
		missionRepo.save(m);
		
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}

}