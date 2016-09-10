package com.sensemaya.medicapp.pacientes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sensemaya.medicapp.pacientes.dao.PacientesDao;
import com.sensemaya.medicapp.pacientes.vo.PacienteVo;

@Service
public class PacienteServiceImpl implements PacienteService{

	@Autowired
	private PacientesDao pacienteDao;
	
	@Override
	public List<PacienteVo> getPacientes() {
		return pacienteDao.getPacientes();
	}	
	
}
