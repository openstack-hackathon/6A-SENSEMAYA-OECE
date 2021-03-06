package com.sensemaya.medicapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class Application {

	private static final Logger LOG = LoggerFactory.getLogger(Application.class);
	
	public static void main(String[] args) {
		LOG.debug("main app");
		SpringApplication.run(Application.class, args);
	}
	
	
}
