<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
	<h1>What Candy will u  bring to the Carnivale</h1>
	<div>
		<h1></h1>
		<br>
		<a href = "/dashboard">Dashboard</a>
		<a href = "/newCandy">New Candy</a>
		<a href = "/oneCandy">One Candy</a>
		<a href = "/updateCandy">Update Candy</a>
	
	</div>
	
	<div>
	  
	<h1>New Candy Form</h1>
	<form:form action="/processCandy" method="post" modelAttribute="candy">
	    <p>
	        <form:label path="name">Name</form:label>
	        <form:errors path="name"/>
	        <form:input path="name"/>
	    </p>
	    <p>
	        <form:label path="brand">Brand</form:label>
	        <form:errors path="brand"/>
	        <form:input path="brand"/>
	    </p>
	    <p>
	        <form:label path="price">Price</form:label>
	        <form:errors path="price"/>
	        <form:input type = "number" path="price"/>
	    </p>
	    <p>
	        <form:label path="rating">Rating</form:label>
	        <form:errors path="rating"/>     
	        <form:input type="number" path="rating"/>
	    </p>    
	    <input type="submit" value="Submit"/>
	</form:form>    

		
	</div>
	
	
</body>
</html>