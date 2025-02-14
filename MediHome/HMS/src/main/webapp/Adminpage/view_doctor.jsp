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

		
			<div class="col-md-12">
				<div class="card point-card">
					<div class="card-body">
						<p class="fs-3 text-center">Doctor Details</p>
						
						<c:if test="${not empty sucMsg}">
							<p class="text-center text-success fs-3">${sucMsg}</p>
							<c:remove var="sucMsg" scope="session" />
						</c:if>

						<c:if test="${not empty errorMsg}">
							<p class="text-center text-danger fs-5">${errorMsg}</p>
							<c:remove var="errorMsg" scope="session" />
						</c:if>
						
						<table class="table">
							<thead>
								<tr>
									<th scope="col">Name</th>
									<th scope="col">DOB</th>
									<th scope="col">Degree</th>
									<th scope="col">Specialist</th>
									<th scope="col">Email</th>
									<th scope="col">Mobno</th>
									<th scope="col">Action</th>
								</tr>
							</thead>

							<tbody>

								<%
								Doctordao dao2 = new Doctordao(DbConnect.getcon());
								List<Doctor> list2 = dao2.getallDoctors();

								for (Doctor d : list2) {
								%>

								<tr>

									<td><%=d.getDocname()%></td>
									<td><%=d.getDob()%></td>
									<td><%=d.getQualification()%></td>
									<td><%=d.getSpecialist()%></td>
									<td><%=d.getEmail()%></td>
									<td><%=d.getMobno()%></td>
									
									<td>
									<a href="edit_doctor.jsp?id=<%=d.getId() %>" class="btn btn-sm btn-primary">Edit</a>
									</td>
									<td>
									<a href="../deleteDoctor?id=<%=d.getId() %>" class="btn btn-sm btn-danger">Delete</a>
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
		</div>
	</div>





</body>
</html>