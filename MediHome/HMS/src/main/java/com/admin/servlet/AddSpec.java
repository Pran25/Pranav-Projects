package com.admin.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.Db.DbConnect;
import com.dao.SpecialistDao;
import com.entity.User;

@WebServlet("/addSpecialist")
public class AddSpec extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String specname = req.getParameter("specname");

		SpecialistDao dao = new SpecialistDao(DbConnect.getcon());
		boolean f = dao.addSpec(specname);
		HttpSession session = req.getSession();
		
		if (f)
		{
			session.setAttribute("sucMsg", "Specialist Added");
			resp.sendRedirect("Adminpage/index.jsp");
		} else
		{
			session.setAttribute("errorMsg", "Something Wrong on server");
			resp.sendRedirect("Adminpage/index.jsp");
		}

	}

}
