package com.entity;

public class Appointment {
	
	private int id;
	private int userId;
	private String fullName;
	private String Gender;
	private String Age;
	private String AppointDate;
	private String Email;
	private String Phno;
	private String Disease;
	private int DoctorId;
	private String Address;
	private String Status;
	
	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Appointment(int userId, String fullName, String gender, String age, String appointDate, String email,
			String phno, String disease, int doctorId, String address, String status) {
		super();
		this.userId = userId;
		this.fullName = fullName;
		Gender = gender;
		Age = age;
		AppointDate = appointDate;
		Email = email;
		Phno = phno;
		Disease = disease;
		DoctorId = doctorId;
		Address = address;
		Status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getAge() {
		return Age;
	}

	public void setAge(String age) {
		Age = age;
	}

	public String getAppointDate() {
		return AppointDate;
	}

	public void setAppointDate(String appointDate) {
		AppointDate = appointDate;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getPhno() {
		return Phno;
	}

	public void setPhno(String phno) {
		Phno = phno;
	}

	public String getDisease() {
		return Disease;
	}

	public void setDisease(String disease) {
		Disease = disease;
	}

	public int getDoctorId() {
		return DoctorId;
	}

	public void setDoctorId(int doctorId) {
		DoctorId = doctorId;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}
	
	
	
	
	
	

}
