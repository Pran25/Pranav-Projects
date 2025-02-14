<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<%@include file="Component/allcss.jsp" %>
<style type="text/css">

        .form-container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            max-width: 400px;
            width: 100%;
            margin: auto;
            margin-top: 100px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
             
        }
        .form-container h2 {
            margin-bottom: 20px;
        }
        .form-container label {
            display: block;
            margin-bottom: 5px;
        }
        .form-container input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .form-container input[type="hidden"] {
            display: none;
        }
        .form-container button {
            width: 100%;
            padding: 10px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .form-container button:hover {
            background-color: #0056b3;
        }
</style>
<title>Change Password</title>
</head>
<body>
<%@include file="Component/Navbar.jsp" %>

<c:if test="${empty userobj}">

<c:redirect url="user_login.jsp"></c:redirect>

</c:if>

<div class="form-container">

        <h2 class="text-center">Change Password</h2>
		<c:if test="${not empty sucMsg}">
			<p class="text-center text-success fs-3">${sucMsg}</p>
			<c:remove var="sucMsg" scope="session" />
		</c:if>

		<c:if test="${not empty errorMsg}">
			<p class="text-center text-danger fs-5">${errorMsg}</p>
			<c:remove var="errorMsg" scope="session" />
		</c:if>

		<form action="passwordChanged" method="post" class="mt-5">
        
            <label for="oldPassword">Old Password:</label>
            <input type="password" id="oldPassword" name="oldPassword" required>
            
            <label for="newPassword">New Password:</label>
            <input type="password" id="newPassword" name="newPassword" required>
            
            <input type="hidden" name="uid" value="${userobj.id }">
            
            <button type="submit">Submit</button>
        </form>
    </div>

</body>
</html>