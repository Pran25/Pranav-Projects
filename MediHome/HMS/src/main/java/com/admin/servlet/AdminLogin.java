package com.admin.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.entity.User;



@WebServlet("/adminlogin")
public class AdminLogin extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		HttpSession session = req.getSession();		
		
		if("Pranav@gmail.com".equals(email) && "admin".equals(password))
		{
			session.setAttribute("adminobj",new User());
			resp.sendRedirect("Adminpage/index.jsp");
		}else
		{
			session.setAttribute("errorMsg","Invalid Email & Password");
			resp.sendRedirect("admin_login.jsp");
		}
		
	}

}
