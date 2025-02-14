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
@WebServlet("/deleteDoctor")
public class DeleteDoctor extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int id = Integer.parseInt(req.getParameter("id"));
		
		Doctordao dao = new Doctordao(DbConnect.getcon());
		HttpSession session = req.getSession();
		
		if(dao.deleteDoctor(id))
		{
			session.setAttribute("sucMsg", "Doctor Deleted Successfully");
			resp.sendRedirect("Adminpage/view_doctor.jsp");
			
		}else
		{
			session.setAttribute("errorMsg", "Doctor Not Deleted Failed");
			resp.sendRedirect("Adminpage/view_doctor.jsp");
		}
	}
	
	

}
