package dev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import dev.model.Mission;
import dev.repository.MissionRepo;

@RestController
public class MissionController {

	@Autowired
	private MissionRepo missionrepo;

	@GetMapping("/missions")
//	@CrossOrigin("*")
	public List<Mission> get() {
 
		return missionrepo.findAll();
	}
}