package com.sensemaya.medicapp.login.service;

import com.sensemaya.medicapp.login.LoginVo;

public interface LoginService {
	
	public LoginVo autenticateUser(String usr, String password);
	
}
