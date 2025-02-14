package com.user.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.Db.DbConnect;
import com.dao.AppointmentDAO;
import com.entity.Appointment;
@WebServlet("/addAppointment")
public class AppointmentServlet extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int userId = Integer.parseInt(req.getParameter("userId"));
		String fullName = req.getParameter("fullname");
		String Gender = req.getParameter("gender");
		String Age = req.getParameter("age");
		String AppointDate = req.getParameter("appoint");
		String Email = req.getParameter("email");
		String Phno = req.getParameter("mobno");
		String Disease = req.getParameter("disease");
		int DoctorId = Integer.parseInt(req.getParameter("doctor"));
		String Address = req.getParameter("address");
		
		Appointment ap = new Appointment(userId, fullName, Gender, Age, AppointDate, Email, Phno, Disease, DoctorId, Address, "Pending");
		AppointmentDAO dao = new AppointmentDAO(DbConnect.getcon());
		HttpSession session = req.getSession();
		
		if(dao.addAppointment(ap))
		{
			session.setAttribute("sucMsg","Appointment Added Successfully");
			resp.sendRedirect("user_appoint.jsp");
		}else 
		{
			session.setAttribute("errorMsg","Something Went Wrong");
			resp.sendRedirect("user_appoint.jsp");
		}
		
		
	}
	
	

}
