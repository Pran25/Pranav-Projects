<%@page import="com.entity.Doctor"%>
<%@page import="java.util.List"%>
<%@page import="com.Db.DbConnect"%>
<%@page import="com.dao.Doctordao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@include file="Component/allcss.jsp"%>
<meta charset="UTF-8">
<title>User Appointment</title>

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
		<p class="text-center text-white fs-2">Fill Details</p>
	</div>

	<div class="container p-3">
		<div class="row">

			<div class="col-md-5 p-5">
				<img alt="" src="image/doc_4.jpeg" height="400" width="400">
			</div>


			<div class="container col-md-7 mt-5">
				<div class="card point-card">
					<div class="card-body">
						<h1 class="text-center fs-3">Appointment Page</h1>

						<c:if test="${not empty errorMsg}">
							<p class="text-center text-danger fs-5">${errorMsg}</p>
							<c:remove var="errorMsg" scope="session" />
						</c:if>

						<c:if test="${not empty sucMsg}">
							<p class="text-center text-danger fs-5">${sucMsg}</p>
							<c:remove var="sucMsg" scope="session" />
						</c:if>

						<form action="addAppointment" method="post" class="mt-3">
						<input type="hidden" name="userId" id="userId" value="${userobj.id }">
							<div class="row">
								<div class="col-md-6 mb-3">
									<label for="inputName1">Full Name</label> <input type="text"
										class="form-control" id="fullname" name="fullname"
										placeholder="Enter Full Name">
								</div>
								<div class="col-md-6 mb-3">
									<label for="selectGender1">Gender</label> <select
										class="form-control" id="gender" name="gender">
										<option>Male</option>
										<option>Female</option>
									</select>
								</div>
							</div>


							<div class="row">
								<div class="col-md-6 mb-3">
									<label for="inputAge1">Age</label> <input type="number"
										class="form-control" id="age" name="age"
										placeholder="Enter Age">
								</div>

								<div class="col-md-6 mb-3">
									<label for="inputAppointment4">Appointment</label> <input
										type="date" class="form-control" id="appoint" name="appoint"
										placeholder="Enter Date">
								</div>
							</div>
							<div class="row">
								<div class="col-md-6 mb-3">
									<label for="inputEmail6">Email</label> <input type="email"
										class="form-control" id="email" name="email"
										placeholder="Enter Email Id">
								</div>
								<div class="col-md-6 mb-3">
									<label for="inputPhone5">Phone Number</label> <input
										type="number" class="form-control" id="mobno" name="mobno"
										placeholder="Enter any 10 digits">
								</div>
							</div>
							<div class="row">
								<div class="col-md-6 mb-3">
									<label for="inputDisease6">Disease</label> <input type="text"
										class="form-control" id="disease" name="disease"
										placeholder="Enter Disease">
								</div>
								<div class="col-md-6 mb-3">
									<label for="selectDoctor4">Doctor</label> <select
										class="form-control" id="doctor" name="doctor">
										<option>--Select--</option>
										<%
										
										   Doctordao dao = new Doctordao(DbConnect.getcon());
											    List<Doctor> list = dao.getallDoctors();
											
											for(Doctor d : list){
											%>
											    <option value="<%=d.getId()%>"><%=d.getDocname() %>(<%=d.getSpecialist() %>)</option>
											<%
											
												
											}
										
										%>
										

									</select>
								</div>
								
								<div class="row">
									<div class="col-md-12">
										<label for="Address">Full Address</label>
										<textarea class="form-control" id="address" name="address"
											rows="3" placeholder="Enter your Address here">
                                    </textarea>
									</div>
								</div>
								
								<div class="mt-4">
								<c:if test="${empty userobj }">
								<a href="user_login.jsp" class="col-md-6 offset-md-3 btn btn-success">Submit</a>
								</c:if>
								
								<c:if test="${not empty userobj }">
								<button type="submit" class="btn btn-success col-md-6 offset-md-3 mt-3">Submit</button>
								</c:if>
								</div>
								
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<%@include file="Component/Footer.jsp"%>
</body>
</html>