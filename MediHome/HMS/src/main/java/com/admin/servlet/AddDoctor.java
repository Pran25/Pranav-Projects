package com.admin.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.Db.DbConnect;
import com.dao.Doctordao;
import com.entity.Doctor;

@WebServlet("/addDoctor")
public class AddDoctor extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		String fullname = req.getParameter("fullname");
		String dob = req.getParameter("dob");
		String quali = req.getParameter("quali");
		
		String spec = req.getParameter("spec");
		String email = req.getParameter("email");
		String mobno = req.getParameter("mobno");
		
		String password = req.getParameter("password");
		
		Doctor d = new Doctor(fullname, dob, quali, spec, email, mobno, password);
		
		Doctordao dao = new Doctordao(DbConnect.getcon());
		HttpSession session = req.getSession();
		
		if(dao.registerDoctor(d))
		{
			session.setAttribute("sucMsg", "Doctor Added Successfully");
			resp.sendRedirect("Adminpage/doctor.jsp");
			
		}else
		{
			session.setAttribute("errorMsg", "Doctor Not Added Failed");
			resp.sendRedirect("Adminpage/doctor.jsp");
		}
		
	}
	
	

}
