package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.entity.User;
import com.mysql.cj.protocol.Resultset;
import com.mysql.cj.xdevapi.Result;

public class Userdao {
	
	private Connection con;

	public Userdao(Connection con) {
		super();
		this.con = con;
	}
	
	
	public boolean register(User u )
	{
		boolean f= false;
		String q = "insert into user_details(fullname,email,password)values(?,?,?)";
		try {
			PreparedStatement ps = con.prepareStatement(q);
			
			ps.setString(1, u.getFullName());
			ps.setString(2, u.getEmail());
			ps.setString(3, u.getPassword());
			
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
	
	
	public User login(String em,String psw)
	{
		User u = null;
		
	
		try {
			
			String q = "select * from user_details where email=? and password=?";
			PreparedStatement ps = con.prepareStatement(q);
			ps.setString(1, em);
			ps.setString(2, psw);
			
			ResultSet rs = ps.executeQuery();
			
			while(rs.next())
			{
				u = new User();
				u.setId(rs.getInt(1));
				u.setFullName(rs.getString(2));
				u.setEmail(rs.getString(3));
				u.setPassword(rs.getString(4));
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return u;
		
	}
	
	public boolean checkOldPassword(int userid, String oldpassword) {
		boolean f = false;

		try {
			String sql = "select * from user_details where id=? and password=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, userid);
			ps.setString(2, oldpassword);
			
			ResultSet rs = ps.executeQuery();
			while(rs.next())
			{
				
				f=true;
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return f;

	}
	
	public boolean changePasswordnew(int userid, String newpassword) {
		boolean f = false;

		try {
			String sql = "update user_details set password=? where id=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, newpassword);
			ps.setInt(2, userid);
			
			int i = ps.executeUpdate();
			
			if(i==1)
			{
				f = true;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return f;

	}

}
