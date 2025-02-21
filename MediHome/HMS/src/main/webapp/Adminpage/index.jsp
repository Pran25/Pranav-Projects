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
<title>Admin Page</title>
<style type="text/css">
.point-card {
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}
</style>
<%@include file="../Component/allcss.jsp"%>
</head>
<body>
	<%@include file="Navbar.jsp"%>
	
	<c:if test="${ empty adminobj} ">
	<c:redirect url="../admin_login.jsp"></c:redirect>
	
	</c:if>


	<div class="container p-5 mt-4">
		<p class="text-center fs-3">Admin Dashboard</p>
		

		<c:if test="${not empty sucMsg}">
			<p class="text-center text-success fs-3">${sucMsg}</p>
			<c:remove var="sucMsg" scope="session" />
		</c:if>

		<c:if test="${not empty errorMsg}">
			<p class="text-center text-danger fs-5">${errorMsg}</p>
			<c:remove var="errorMsg" scope="session" />
		</c:if>
		
		<%
		   Doctordao dao = new Doctordao(DbConnect.getcon());
		%>

		<div class="row">
			<div class="col-md-4">
				<div class="card point-card">
					<div class="card-body text-center text-success">
						<i class="fas fa-user-doctor fa-3x"></i><br>
						<p class="fs-4 text-center">Doctor</p>
						<%=dao.countDoctor() %>
					</div>
				</div>
			</div>
			
			

			<div class="col-md-4">
				<div class="card point-card">
					<div class="card-body text-center text-success">
						<i class="fas fa-users fa-3x"></i><br>
						<p class="fs-4 text-center">User</p>
						<%=dao.countUser() %>
					</div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card point-card">
					<div class="card-body text-center text-success">
						<i class="fas fa-calendar-check fa-3x"></i><br>
						<p class="fs-4 text-center">Total Appointment</p>
						<%=dao.countAppointment() %>
					</div>
				</div>
			</div>

			<div class="col-md-4 mt-4">
				<div class="card point-card" data-bs-toggle="modal" data-bs-target="#exampleModal">
					<div class="card-body text-center text-success">
						<i class="fas fa-thumbs-up fa-3x"></i><br>
						<p class="fs-4 text-center">Specialist</p>
						<%=dao.countSpecialist() %>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
      <form action="../addSpecialist" method="post">
      
      <div class="form-group">
      <label>Enter Specialist Name</label>
      <input type="text" name="specname" class="form-control">
      </div>
      <div class="text-center mt-3">
      <button type="submit" class="btn btn-primary">Add</button>
      </div>
      
      
      </form>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>





</body>
</html>