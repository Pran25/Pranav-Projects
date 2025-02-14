<%@page import="com.entity.User"%>
<%@page import="com.entity.Doctor"%>
<%@page import="com.dao.Doctordao"%>
<%@page import="com.entity.Appointment"%>
<%@page import="java.util.List"%>
<%@page import="com.Db.DbConnect"%>
<%@page import="com.dao.AppointmentDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>View Appointment</title>
<%@include file="Component/allcss.jsp"%>

<style type="text/css">
.point-card {
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}

.imgback {
	background: linear-gradient(rgba(0, 0, 0, -4), rgba(0, 0, 0, -4)),
		url("image/realhos.jpeg");
	height: 20vh;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
}
</style>

</head>
<body>
	<%@include file="Component/Navbar.jsp"%>

	<div class="container-fluid imgback p-5">
		<h1 class="text-white text-center fs-2">View Appointment</h1>
	</div>

	<div class="container p-4 mt-4">
		<div class="row">
			<div class="col-md-9">
				<div class="card point-card">
					<div class="card-body">
						<p class="fs-4 fw-bold text-center text-success">List Of
							Appointment</p>
						<table class="table">
							<thead>
								<tr>
									<th scope="col">Full Name</th>
									<th scope="col">Gender</th>
									<th scope="col">Age</th>
									<th scope="col">Appoint Date</th>
									<th scope="col">Disease</th>
									<th scope="col">Doctor Name</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							<tbody>

								<%
							    
							        User user = (User)session.getAttribute("userobj");
							       AppointmentDAO dao = new AppointmentDAO(DbConnect.getcon());
							       Doctordao dao2 = new Doctordao(DbConnect.getcon());
							       List<Appointment> list = dao.getAllAppointmentByLoginUser(user.getId());
							         
							         for(Appointment ap: list){
							        Doctor d = dao2.getDoctorsById(ap.getDoctorId());
							     %>
                                 <tr>
								<th><%=ap.getFullName()%></th>
								<td><%=ap.getGender() %></td>
								<td><%=ap.getAge() %></td>
								<td><%=ap.getAppointDate() %></td>
								<td><%=ap.getDisease() %></td>
								<td><%=d.getDocname() %></td>
								<td>
								<%
								  
								   if("Pending".equals(ap.getStatus()))
								   {%>
								     
								      <a href="#" class="btn btn-sm btn-warning">Pending</a> <% 
									   
								  }else
								   {
								   %>
									   <%=ap.getStatus() %>
								   <%
								   }
								   %>
								</td>
								</tr>
								<% 
								}
							    %>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div class="col-md-3 p-3">
				<img alt="" src="image/doc_1.jpeg" height="300" width="300">
			</div>
		</div>
	</div>

</body>
</html>