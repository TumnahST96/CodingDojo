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
	<h1>What Expense will u  change</h1>
	<div>
		<h1></h1>
		<br>
		<a href = "/dashboard">Dashboard</a>
		<a href = "/newCandy">New Candy</a>
	
	</div>
	
	<div>
	  
	<h1>New Expense Form</h1>
	<form:form action="/processTravel" method="post" modelAttribute="travel">
	    <p>
	        <form:label path="name">Name</form:label>
	        <form:errors path="name"/>
	        <form:input path="name"/>
	    </p>
	    <p>
	        <form:label path="vendor">Vendor</form:label>
	        <form:errors path="vendor"/>
	        <form:input path="vendor"/>
	    </p>
	    <p>
	        <form:label path="price">Price</form:label>
	        <form:errors path="price"/>
	        <form:input type = "number" path="price"/>
	    </p>
	    <p>
	        <form:label path="description">description</form:label>
	        <form:errors path="description"/>     
	        <form:input  path="description"/>
	    </p>    
	    <input type="submit" value="Submit"/>
	</form:form>    

		
	</div>
	
	
</body>
</html>