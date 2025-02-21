<%@page import="com.entity.Appointment"%>
<%@page import="com.Db.DbConnect"%>
<%@page import="com.dao.AppointmentDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Comment Page</title>
<%@include file="../Component/allcss.jsp"%>

<style type="text/css">
.point-card {
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}

.imgback {
	background: linear-gradient(rgba(0, 0, 0, -4), rgba(0, 0, 0, -4)),
		url("../image/realhos.jpeg");
	height: 20vh;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
}
</style>

</head>
<body>

	<c:if test="${empty docObj }">
		<c:redirect url="../doctor_login.jsp"></c:redirect>
	</c:if>
	
	<%@include file="Navbar.jsp"%>

	<div class="container-fluid imgback p-5">
		<p class="text-center text-white fs-2">Comment</p>
	</div>

	<div class="container p-3">
		<div class="row">

			<div class="col-md-5 p-5">
				<img alt="" src="../image/doc_4.jpeg" height="400" width="400">
			</div>


			<div class="container col-md-7 mt-5">
				<div class="card point-card">
					<div class="card-body">
						<h1 class="text-center fs-3">Comment Page</h1>
						
						<% 
						
						   int id = Integer.parseInt(request.getParameter("id"));
						   AppointmentDAO dao = new AppointmentDAO(DbConnect.getcon());
						   Appointment ap =  dao.getAppointmentById(id);
						   
						
						%>

						<form action="../updateStatus" method="post" class="row">
						
						<div class="col-md-6">
						<label>Patient Name</label>
						<input type="text" readonly value="<%=ap.getFullName() %>" class="form-control">
						</div>
						
						<div class="col-md-6">
						<label>Age</label>
						<input type="text" readonly value="<%=ap.getAge() %>" class="form-control">
						</div>
						
						<div class="col-md-6">
						<label>Mobile No</label>
						<input type="text" readonly value="<%=ap.getPhno() %>" class="form-control">
						</div>
						
						<div class="col-md-6">
						<label>Disease</label>
						<input type="text" readonly value="<%=ap.getDisease() %>" class="form-control">
						</div>
						
						<div class="col-md-12">
						<br><label>Comment</label>
						 <textarea required name="comment" class="form-control" rows="3" cols=""></textarea>
						</div>
						
						<input type="hidden" name="id" value="<%=ap.getId() %>">
						<input type="hidden" name="did" value="<%=ap.getDoctorId() %>">
						
						<button class="mt-3 btn btn-dark col-md-6 offset-md-3">Submit</button>
                         
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	


</body>
</html>