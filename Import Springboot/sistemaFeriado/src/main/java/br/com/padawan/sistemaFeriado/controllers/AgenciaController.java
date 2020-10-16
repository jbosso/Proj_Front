package br.com.padawan.sistemaFeriado.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


import br.com.padawan.sistemaFeriado.dao.AgenciaDAO;
import br.com.padawan.sistemaFeriado.model.Agencia;

@CrossOrigin("*")
@RestController
public class AgenciaController {

	@Autowired
	private AgenciaDAO dao;
	
	
	@GetMapping("/agencias")
	public ArrayList<Agencia> recuperarTodas(){
		ArrayList<Agencia> lista;
		lista = (ArrayList<Agencia>)dao.findAll();  // essa linha aqui que faz o select!!!
		return lista;
	}
}
