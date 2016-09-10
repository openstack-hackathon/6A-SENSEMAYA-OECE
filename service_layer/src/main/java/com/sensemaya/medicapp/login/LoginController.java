package com.sensemaya.medicapp.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sensemaya.medicapp.common.CommonResponse;
import com.sensemaya.medicapp.login.service.LoginService;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService service;
	
	@RequestMapping(path="", method=RequestMethod.POST)
	private CommonResponse loginPost(@RequestBody LoguinRequest usr){
		CommonResponse rs = new CommonResponse();
		rs.setSuccess(true);
		rs.setResult(service.autenticateUser(usr.getUser(), usr.getPassword()));
		
		return rs;
				
	}
	
}
