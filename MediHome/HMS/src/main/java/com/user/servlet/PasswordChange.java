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
@WebServlet("/passwordChanged")
public class PasswordChange extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int uid = Integer.parseInt(req.getParameter("uid"));
		String oldPassword = req.getParameter("oldPassword");
		String newPassword = req.getParameter("newPassword");
		
		Userdao dao = new Userdao(DbConnect.getcon());
		HttpSession session = req.getSession();
		
		if(dao.checkOldPassword(uid, oldPassword))
		{
			if(dao.changePasswordnew(uid, newPassword))
			{
				session.setAttribute("sucMsg", "Password Change Successfully");
				resp.sendRedirect("change_password.jsp");
				
			}else {
				session.setAttribute("errorMsg", "Something Went Wrong");
				resp.sendRedirect("change_password.jsp");
				
				
			}
			
		}else {
			
			session.setAttribute("errorMsg", "Old Password Incorrect");
			resp.sendRedirect("change_password.jsp");
			
		}
		
		
		
	}
	

}
