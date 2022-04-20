<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
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
	<h1>Number of User Submitted Stories: ${numStories}</h1>
	<h1>${story}</h1>
	<form action = "/madlibs" method = "POST">
		<p class = "err">${verb_error}</p>
		<input placeholder = "verb" name = "verb"/>
		<p class = "err">${Adjective_error}</p>
		<input placeholder = "Adjective" name = "Adjective"/>
		<p class = "err">${noun_error}</p>
		<input placeholder = "Noun" name = "Noun"/>
	
		<input type = "submit" value = "Create Mad lib"/>
	
	</form>
</body>
</html>