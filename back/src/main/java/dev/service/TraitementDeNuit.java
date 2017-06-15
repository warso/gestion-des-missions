package dev.service;

import java.util.List;
import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import dev.enumeration.Statut;
import dev.model.Mission;
import dev.repository.MissionRepo;


public class TraitementDeNuit {	

	@Autowired MissionRepo missionRepo;


	//@Scheduled(cron="0 0 1 * * ?")
	@Scheduled(fixedDelay=5000)
	public boolean lancerTraitementNuit() {
		
		// DELETE ME !
		envoiMail("manager@yopmail.com","Bonjour ! T'as du boulot ! ");
		// DELETE ME 
		
		List<Mission> missions = missionRepo.findAll();
		for (Mission m : missions) {
			if(m.getStatut() == Statut.INITIALE) {
				m.setStatut(Statut.EN_ATTENTE_VALIDATION);
				
				envoiMail("manager@yopmail.com","Bonjour ! T'as du boulot ! ");
				
				
				
			}
		}

		return false;
	}

	public void envoiMail(String destinataire, String contenuMail){
		
		Properties prop = new Properties();
        prop.setProperty("mail.transport.protocol", "smtp");
        prop.setProperty("mail.smtp.auth", "true");
        prop.setProperty("mail.smtp.starttls.enable","true");
        prop.setProperty("mail.debug","true");
        prop.setProperty("mail.smtp.ssl.trust", "smtp.gmail.com");
        //mailSender.setJavaMailProperties(prop);
		
		//System.out.println("Envoi mail ...");
		JavaMailSenderImpl sender = new JavaMailSenderImpl();
		sender.setJavaMailProperties(prop);
		//sender.setHost("smtp.gmail.com");
		sender.setPassword("formationdta");
		sender.setUsername("clever.institut.test@gmail.com");

		MimeMessage message = sender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		try {
			helper.setTo(destinataire);
			helper.setText(contenuMail);
		} catch (MessagingException e) {
			e.printStackTrace();
		}

		sender.send(message);
		System.out.println("Mail envoyé");
	}

}
