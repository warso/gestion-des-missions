package dev.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import dev.enumeration.Statut;
import dev.model.Mission;
import dev.model.Nature;
import dev.repository.MissionRepo;
import java.time.temporal.ChronoUnit;

@Component
public class TraitementDeNuit {	

	@Autowired MissionRepo missionRepo;


	/**
	 * Se lance automatiquement tous les jours à 01h00
	 * Traite différente tâches sur les missions
	 */
	//@Scheduled(fixedDelay=5000) // Pour tester (toutes les 5 secondes)
	@Scheduled(cron="0 0 1 * * ?") // Tous les jours à une heure du matin 
	public void lancerTraitementNuit() {

		//System.out.println("coucou");


		List<Mission> missions = missionRepo.findAll();
		for (Mission m : missions) {

			if(m.getStatut() == Statut.INITIALE)
				traitementMissionNouvelle(m);

			if(m.getStatut() != Statut.ECHUE && m.getFin().isBefore(LocalDate.now()))
				traitementMissionTerminee(m);
			
		}

	}

	/**
	 * Traite une mission qui est considérée comme terminée.
	 * Passe la mission en statut ECHUE
	 * Calcul la prime associée à cette mission
	 * @param m La mission à traiter.
	 */
	private void traitementMissionTerminee(Mission m) {
		m.setStatut(Statut.ECHUE);
		Nature nat = m.getNature();
		if(nat.isPrime()){
			long nbJours = ChronoUnit.DAYS.between(m.getDebut(),m.getFin());
			m.setPrime(nbJours * nat.getTauxJournalierMoyen() * nat.getPourcentagePrime());
		}


		missionRepo.save(m);
	}

	/**
	 * Traite une mission en statut initial.
	 * Passe son statut en EN_ATTENTE_VALIDATION
	 * Envoi un email au manager pour le notifier de cette mission
	 * @param m La mission à traiter.
	 */
	private void traitementMissionNouvelle(Mission m) {

		m.setStatut(Statut.EN_ATTENTE_VALIDATION);
		envoiMail(
				"manager@yopmail.com",
				"Mission "+m.getId()+" en attente de validation",
				"Bonjour !\r"
						+ "La mission ID:"+m.getId()+" a besoin d'être validée.\r"
						+ "Cliquez ici pour accéder à la page de validation.");

		missionRepo.save(m);

	}

	/**
	 * Envoi un email.
	 * @param destinataire Le destinataire du courriel
	 * @param objet L'objet de l'email (titre du message)
	 * @param contenuMail Le contenu du courriel (message)
	 */
	public void envoiMail(String destinataire,String objet, String contenuMail){

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
		sender.setHost("smtp.gmail.com");
		sender.setPort(587);
		sender.setPassword("formationdta");
		sender.setUsername("clever.institut.test@gmail.com");

		MimeMessage message = sender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		try {
			helper.setTo(destinataire);
			helper.setText(contenuMail);
			helper.setSubject(objet);
		} catch (MessagingException e) {
			e.printStackTrace();
		}

		sender.send(message);
		System.out.println("Mail envoyé");
	}

}
