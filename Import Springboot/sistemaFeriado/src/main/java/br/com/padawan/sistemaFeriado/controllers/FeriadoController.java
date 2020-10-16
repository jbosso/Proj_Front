package br.com.padawan.sistemaFeriado.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.padawan.sistemaFeriado.dao.FeriadoDAO;
import br.com.padawan.sistemaFeriado.model.Agencia;
import br.com.padawan.sistemaFeriado.model.Feriado;

@RestController
@CrossOrigin("*")
public class FeriadoController {
	
	@Autowired
	private FeriadoDAO dao;
	
	
	@GetMapping("/feriados")
	public ArrayList<Feriado> listarTudo(){
		ArrayList<Feriado> lista;
		lista = dao.findByOrderByDataInicio();
		return lista;
	}
	
	@PostMapping("/feriados/novo")
	public ResponseEntity<Feriado> adicionarNovo(@RequestBody Feriado novo){
		try {
			dao.save(novo);
			return ResponseEntity.status(201).body(novo);
		}
		catch(Exception ex) {
			return ResponseEntity.status(400).build();
		}
	}

	
	@GetMapping("/feriados/agencia/{id}")
	public ArrayList<Feriado> recuperarPorAgencia(@PathVariable int id){
		Agencia ag = new Agencia();
		ag.setId(id);
		ArrayList<Feriado> lista;
		lista = dao.findByAgencia(ag);
		return lista;
	}
}