<%@page import="com.entity.Doctor"%>
<%@page import="com.dao.Doctordao"%>
<%@page import="com.entity.Specialist"%>
<%@page import="java.util.List"%>
<%@page import="com.Db.DbConnect"%>
<%@page import="com.dao.SpecialistDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<%@include file="../Component/allcss.jsp"%>

<style type="text/css">
.point-card {
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}
</style>

</head>
<body>
	<%@include file="Navbar.jsp"%>

	<div class="container-fluid p-5">
		<div class="row">

			<div class="col-md-5 offset-md-4">
				<div class="card point-card">
					<div class="card-body">
						<p class="fs-3 text-center">Add Doctor</p>

						<c:if test="${not empty sucMsg}">
							<p class="text-center text-success fs-3">${sucMsg}</p>
							<c:remove var="sucMsg" scope="session" />
						</c:if>

						<c:if test="${not empty errorMsg}">
							<p class="text-center text-danger fs-5">${errorMsg}</p>
							<c:remove var="errorMsg" scope="session" />
						</c:if>


						<form action="../addDoctor" method="post">

							<div class="mb-3">
								<label class="form-label">Full Name</label> <input type="text"
									required name="fullname" class="form-control">
							</div>

							<div class="mb-3">
								<label class="form-label">DOB</label> <input type="date"
									required name="dob" class="form-control">
							</div>

							<div class="mb-3">
								<label class="form-label">Qualification</label> <input
									type="text" required name="quali" class="form-control">
							</div>

							<div class="mb-3">
								<label class="form-label">Specialist</label> <select name="spec"
									required class="form-control">
									<option>---Select---</option>

									<%
									SpecialistDao dao = new SpecialistDao(DbConnect.getcon());

									List<Specialist> list = dao.getallSpecialist();

									for (Specialist s : list) {
									%>
									<option><%=s.getSpecname()%></option>
									<%
									}
									%>



								</select>
							</div>

							<div class="mb-3">
								<label class="form-label">Email</label> <input type="text"
									required name="email" class="form-control">
							</div>

							<div class="mb-3">
								<label class="form-label">Mobile no</label> <input type="text"
									required name="mobno" class="form-control">
							</div>

							<div class="mb-3">
								<label class="form-label">Password</label> <input type="text"
									required name="password" class="form-control">
							</div>

							<button type="submit" class="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
			
		</div>
	</div>





</body>
</html>