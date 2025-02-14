package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.entity.Doctor;

public class Doctordao {
	
	private Connection con;

	public Doctordao(Connection con) {
		super();
		this.con = con;
	}
	
	public boolean registerDoctor(Doctor d)
	{
		
		boolean f = false;
		
		
		try {
			
			String sql = "insert into doctor(fullname,dob,doc_quali,doc_spec,email,mobno,password) values(?,?,?,?,?,?,?)";
			PreparedStatement ps = con.prepareStatement(sql);
			
			ps.setString(1, d.getDocname());
			ps.setString(2, d.getDob());
			ps.setString(3, d.getQualification());
			ps.setString(4, d.getSpecialist());
			ps.setString(5, d.getEmail());
			ps.setString(6, d.getMobno());
			ps.setString(7, d.getPassword()); 
			
			int i = ps.executeUpdate();
			
			if(i==1)
			{
				f=true;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return f;
		
	}
	
	public List<Doctor> getallDoctors()
	{
		List<Doctor> list = new ArrayList<Doctor>();
		Doctor d = null;
		
		try {
			
			String sql = "select * from doctor order by id desc";
			PreparedStatement ps = con.prepareStatement(sql);
			
			ResultSet rs = ps.executeQuery();
			
			while(rs.next())
			{
				d = new Doctor();
				
				d.setId(rs.getInt(1));
				d.setDocname(rs.getString(2));
				d.setDob(rs.getString(3));
				d.setQualification(rs.getString(4));
				d.setSpecialist(rs.getString(5));
				d.setEmail(rs.getString(6));
				d.setMobno(rs.getString(7));
				d.setPassword(rs.getString(8));
				
				list.add(d);
				
			
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
		
	}
	
	public Doctor getDoctorsById(int id)
	{
		
		Doctor d = null;
		
		try {
			
			String sql = "select * from doctor where id = ?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, id);
			
			ResultSet rs = ps.executeQuery();
			
			while(rs.next())
			{
				d = new Doctor();
				
				d.setId(rs.getInt(1));
				d.setDocname(rs.getString(2));
				d.setDob(rs.getString(3));
				d.setQualification(rs.getString(4));
				d.setSpecialist(rs.getString(5));
				d.setEmail(rs.getString(6));
				d.setMobno(rs.getString(7));
				d.setPassword(rs.getString(8));
				
				
				
			
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return d;
		
	}
	
	
	public boolean updateDoctor(Doctor d)
	{
		
		boolean f = false;
		
		
		try {
			
			String sql = "update doctor set fullname=?,dob=?,doc_quali=?,doc_spec=?,email=?,mobno=?,password=? where id=?";
			PreparedStatement ps = con.prepareStatement(sql);
			
			ps.setString(1, d.getDocname());
			ps.setString(2, d.getDob());
			ps.setString(3, d.getQualification());
			ps.setString(4, d.getSpecialist());
			ps.setString(5, d.getEmail());
			ps.setString(6, d.getMobno());
			ps.setString(7, d.getPassword()); 
			ps.setInt(8, d.getId());
			
			int i = ps.executeUpdate();
			
			if(i==1)
			{
				f=true;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return f;
		
	}
	
	
	public boolean deleteDoctor(int id)
	{
		boolean f = false;
		
		try {
			String sql = "delete from doctor where id=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, id);
			
			int i = ps.executeUpdate();
			
			if(i==1)
			{
				f=true;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return f;
		
	}
	
	public Doctor login(String email,String psw)
	{
		Doctor d = null;
		
		try {
			String sql = "select * from doctor where email=? and password=?";
			PreparedStatement ps = con.prepareStatement(sql);
			
			ps.setString(1, email);
			ps.setString(2, psw);
			
			ResultSet rs = ps.executeQuery();
			
			while(rs.next())
			{
                d = new Doctor();
				d.setId(rs.getInt(1));
				d.setDocname(rs.getString(2));
				d.setDob(rs.getString(3));
				d.setQualification(rs.getString(4));
				d.setSpecialist(rs.getString(5));
				d.setEmail(rs.getString(6));
				d.setMobno(rs.getString(7));
				d.setPassword(rs.getString(8));
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return d;
		
	}
	
	public int countDoctor()
	{
		int i = 0;
		
		
		try {
			String sql = "select * from doctor";
			PreparedStatement ps = con.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				
				i++;
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return i;
		
	}
	
	public int countUser()
	{
		int i = 0;
		
		
		try {
			String sql = "select * from user_details";
			PreparedStatement ps = con.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				
				i++;
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return i;
		
	}
	
	public int countAppointment()
	{
		int i = 0;
		
		
		try {
			String sql = "select * from appointment";
			PreparedStatement ps = con.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				
				i++;
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return i;
		
	}
	
	
	public int countSpecialist()
	{
		int i = 0;
		
		
		try {
			String sql = "select * from specialist";
			PreparedStatement ps = con.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				
				i++;
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return i;
		
	}
	
	public int countAppointmentByDoctorId(int did)
	{
		int i = 0;
		
		
		try {
			String sql = "select * from appointment where docId=";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, did);
			ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				
				i++;
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return i;
		
	}
	
	
	
	

}
