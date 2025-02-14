package com.Db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnect {

	private static Connection con;

	public static Connection getcon() {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try {
				con = DriverManager.getConnection("jdbc:mysql://localhost:3306/hospital", "root", "root");
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return con;

	}

}
