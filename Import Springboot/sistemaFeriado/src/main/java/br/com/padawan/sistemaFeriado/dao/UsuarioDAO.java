package br.com.padawan.sistemaFeriado.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.padawan.sistemaFeriado.model.Usuario;

public interface UsuarioDAO extends CrudRepository<Usuario,Integer> {
	
	public Usuario findByRacfAndSenha(String racf, String senha);
	public Usuario findByRacf(String racf);
	public Usuario findByRacfOrFuncional(String racf, String funcional);

}
