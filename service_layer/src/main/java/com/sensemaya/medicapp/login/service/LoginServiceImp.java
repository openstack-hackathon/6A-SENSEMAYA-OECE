package com.sensemaya.medicapp.login.service;

import org.springframework.stereotype.Service;

import com.sensemaya.medicapp.login.LoginVo;

@Service
public class LoginServiceImp implements LoginService{

	@Override
	public LoginVo autenticateUser(String usr, String password) {
		
		return consultaUser(usr);
		
	}
	
	private LoginVo consultaUser(String usr){
		LoginVo rs = new LoginVo();
		
			String[] list = usr.split("-");
			rs.setRol(list[0]);
			rs.setUsername(list[1]);
			rs.setUserId(usr);
		
		return rs;
	}
	
}
