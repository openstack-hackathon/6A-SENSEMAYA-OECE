package com.sensemaya.medicapp;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DefaultController {

	@RequestMapping("")
	private String getValue(){
		return "valid";
	}
	
}
