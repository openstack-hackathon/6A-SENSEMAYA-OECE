package com.sensemaya.medicapp.pacientes.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import com.sensemaya.medicapp.pacientes.vo.PacienteVo;

@Component
public class PacientesDaoImpl implements PacientesDao {

	@Autowired
	private JdbcTemplate template;
	
	@Override
	public List<PacienteVo> getPacientes() {
		List<PacienteVo> listPacientes = new ArrayList<PacienteVo>();
		PacienteVo vo = new PacienteVo();
		
		String qry = "SELECT * FROM PERSONA";
		
		template.query(qry, (resultSet, i)->{
			PacienteVo pvo = new PacienteVo();
			pvo.setNombre(resultSet.getString(1));
			return pvo;
		});
		
		listPacientes.add(vo);
		
		
		return listPacientes;
	}

}
