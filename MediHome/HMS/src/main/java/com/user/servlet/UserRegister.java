package com.user.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.catalina.connector.Response;

import com.Db.DbConnect;
import com.dao.Userdao;
import com.entity.User;

@WebServlet("/user_register")
public class UserRegister extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String fullName = req.getParameter("fullname");
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		
		User u = new User(fullName, email, password);
		
		Userdao dao = new Userdao(DbConnect.getcon());
		
		HttpSession session = req.getSession();
		
		boolean f =dao.register(u);
		
		if(f)
		{
			session.setAttribute("sucMsg", "Registration Successfully");
			resp.sendRedirect("signup.jsp");
		}else
		{
			session.setAttribute("errorMsg","Registration Failed");
			resp.sendRedirect("signup.jsp");
	
		}
		
	}

}
