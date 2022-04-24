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
	<h1>Travel expense for ${travel.name} below!</h1>
	<div>
		<h1></h1>
		<br>
		<a href = "/dashboard">Dashboard</a>
		<a href = "/newExpense">New Expense</a>
	</div>
	
	<div>
		${travel.name}
		${travel.vendor}
		${travel.price}
		${travel.description}
		
	</div>
	
	
</body>
</html>