<%@page import="com.entity.Doctor"%>
<%@page import="com.Db.DbConnect"%>
<%@page import="com.dao.Doctordao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page isELIgnored="false"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Doctor Page</title>

<style type="text/css">
.point-card {
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}
</style>

<%@include file="../Component/allcss.jsp" %>
</head>
<body>

<c:if test="${empty docObj }">
<c:redirect url="../doctor_login.jsp"></c:redirect>
</c:if>

<%@include file="Navbar.jsp" %>
<h1 class="fs-3 text-center">Doctor Dashboard</h1>

<%
Doctor d =(Doctor) session.getAttribute("docObj");
Doctordao dao = new Doctordao(DbConnect.getcon());
%>

	<div class="container p-5">
		<div class="row">
			<div class="col-md-4 offset-md-2">
				<div class="card point-card">
					<div class="card-body text-center text-success">
						<i class="fas fa-user-doctor fa-3x"></i><br>
						<p class="fs-4 text-center">Doctor</p>
						<br> <%=dao.countDoctor()%>
					</div>
				</div>
			</div>
			
			<div class="col-md-4">
				<div class="card point-card">
					<div class="card-body text-center text-success">
						<i class="far fa-calendar-check fa-3x"></i><br>
						<p class="fs-4 text-center">Total Appointment</p>
						<br> <%=dao.countAppointmentByDoctorId(d.getId())%>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>