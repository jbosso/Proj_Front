package br.com.padawan.sistemaFeriado.dao;



import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import  br.com.padawan.sistemaFeriado.model.Agencia;
import  br.com.padawan.sistemaFeriado.model.Feriado;

public interface FeriadoDAO extends CrudRepository<Feriado, Integer> {
	
	public ArrayList<Feriado> findByAgencia(Agencia agencia);
	
	public ArrayList<Feriado> findByOrderByDataInicio();
	public ArrayList<Feriado> findByAgenciaOrderByDataInicio(Agencia agencia);

}