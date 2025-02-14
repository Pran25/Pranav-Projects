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

@WebServlet("/updateDoctor")
public class UpdateDoctor extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException,NumberFormatException {
		
		String fullname = req.getParameter("fullname");
		String dob = req.getParameter("dob");
		String quali = req.getParameter("quali");
		
		String spec = req.getParameter("spec");
		String email = req.getParameter("email");
		String mobno = req.getParameter("mobno");
		
		String password = req.getParameter("password");
		
		int id = Integer.parseInt(req.getParameter("id"));
		
		Doctor d = new Doctor(id,fullname, dob, quali, spec, email, mobno, password);
		
		Doctordao dao = new Doctordao(DbConnect.getcon());
		HttpSession session = req.getSession();
		
		if(dao.updateDoctor(d))
		{
			session.setAttribute("sucMsg", "Doctor Update Successfully");
			resp.sendRedirect("Adminpage/view_doctor.jsp");
			
		}else
		{
			session.setAttribute("errorMsg", "Doctor Not Updated Failed");
			resp.sendRedirect("Adminpage/view_doctor.jsp");
		}
		
	}
	
	

}
