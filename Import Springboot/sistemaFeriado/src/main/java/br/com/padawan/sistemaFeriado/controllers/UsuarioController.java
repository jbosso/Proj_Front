package br.com.padawan.sistemaFeriado.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.padawan.sistemaFeriado.dao.UsuarioDAO;
import br.com.padawan.sistemaFeriado.model.Usuario;

@CrossOrigin("*")
@RestController
public class UsuarioController {
	
	@Autowired
	private UsuarioDAO dao;
	
	@PostMapping("/login")
	public ResponseEntity<Usuario> login(@RequestBody Usuario dadosUserLogin) {
		Usuario resultado = dao.findByRacfOrFuncional(dadosUserLogin.getRacf(), dadosUserLogin.getFuncional());
		if (resultado != null) {
			if (resultado.getSenha().equals(dadosUserLogin.getSenha())) {
				resultado.setSenha("*********");
 				return ResponseEntity.ok(resultado);
			}
			else {
				return ResponseEntity.status(401).build();
			}
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
}