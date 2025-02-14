package com.entity;

public class Specialist {
	
	private int id;
	private String specname;
	
	public Specialist() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Specialist(int id, String specname) {
		super();
		this.id = id;
		this.specname = specname;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSpecname() {
		return specname;
	}

	public void setSpecname(String specname) {
		this.specname = specname;
	}

	
	
}
