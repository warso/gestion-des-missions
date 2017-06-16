package dev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.model.Nature;
import dev.repository.NatureRepository;

@RestController
public class NatureController {

	@Autowired
	NatureRepository natureRepo;

	@GetMapping("/nature")
	// @CrossOrigin("*")
	public List<Nature> get() {

		return natureRepo.findAll();
	}

}
