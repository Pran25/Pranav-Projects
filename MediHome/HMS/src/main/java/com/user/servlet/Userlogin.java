package com.user.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.Db.DbConnect;
import com.dao.Userdao;
import com.entity.User;

@WebServlet("/userLogin")
public class Userlogin extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		HttpSession session = req.getSession();		
		
		Userdao dao = new Userdao(DbConnect.getcon());
	    User user=dao.login(email, password);
		
		if(user!=null)
		{
			session.setAttribute("userobj",user);
			resp.sendRedirect("index.jsp");
		}else
		{
			session.setAttribute("errorMsg","Invalid Email & Password");
			resp.sendRedirect("user_login.jsp");
		}
		
	}
	

}
