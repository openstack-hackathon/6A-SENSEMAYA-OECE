package com.sensemaya.medicapp.login;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sensemaya.medicapp.common.CommonResponse;

@RestController
@RequestMapping("/login")
public class LoginController {

	
	@RequestMapping(path="", method=RequestMethod.POST)
	private CommonResponse loginPost(){
		
		return null;
	}
	
}
