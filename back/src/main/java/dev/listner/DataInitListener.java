package dev.listner;


import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.springframework.beans.factory.annotation.Autowired;

import dev.model.Utilisateur;
import dev.repository.UtilisateurRepo;



@WebListener
public class DataInitListener implements ServletContextListener{
	
	@Autowired UtilisateurRepo utilRepo;

	@Override
	public void contextInitialized(ServletContextEvent sce) {		
		Utilisateur util = new Utilisateur();
		util.setMatricule("toto");
		util.setSexe("tropbien");
		utilRepo.save(util);
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}

}