package dev.service;

import java.io.IOException;
import java.net.*;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import dev.model.Personne;
import dev.model.Utilisateur;

public class PersonneService {

	String adressApi = "https://raw.githubusercontent.com/DiginamicFormation/ressources-atelier/master/users.json";

	ObjectMapper mapper = new ObjectMapper();

	List<Personne> getUtilisateurs() {
		List<Personne> list = new ArrayList<>();

		URL url;
		try {
			url = new URL(adressApi);
			list = mapper.readValue(url, new TypeReference<ArrayList<Personne>>() {
			});
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return list;
	}

	public static void main(String[] args) {

		PersonneService service = new PersonneService();
		List<Personne> list = service.getUtilisateurs();
		System.out.println(list.get(0).matricule);
	}

}
