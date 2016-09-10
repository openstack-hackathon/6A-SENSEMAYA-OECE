package com.sensemaya.medicapp.pacientes;

import static com.sensemaya.medicapp.common.CommonResponse.responseDummy;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sensemaya.medicapp.common.CommonResponse;
import com.sensemaya.medicapp.pacientes.service.PacienteService;
import com.sensemaya.medicapp.pacientes.vo.PacienteVo;

@RestController
@RequestMapping("/pacientes")
public class PacientesController {

	@Autowired
	private PacienteService service;
	
	@RequestMapping(path="", method=RequestMethod.GET)
	private CommonResponse getPacientes(){
		List<PacienteVo> ps = service.getPacientes();
		CommonResponse re = responseDummy();
		re.setMessage(Integer.toString(ps.size()));
		System.out.println("RESPONSE.....");
		return re;
	}
	
	@RequestMapping(path="", method=RequestMethod.POST)
	private CommonResponse addPacientes(){
		return responseDummy();
	}
	
}
