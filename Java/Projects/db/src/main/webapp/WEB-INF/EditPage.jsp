
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
	<link rel="stylesheet" type="text/css" href="/css/style.css">
	<script type="text/javascript" src="/js/main.js"></script>
</head>
<body>
	<h1>I'm a Template</h1>
	<div class="container p2 grid gap2">
		
	
	<form:form class="card" action = "/song" method = "POST" modelAttribute = "lecture">
		<div class="card_head">
				<h1 class="col_white1">Edit Song</h1>
			</div>
		<div class = "card_body">
			<form:label path = "song_title">Song Title:</form:label>
			<form:input path ="song_title"/>
			<form:errors path = "song_title"/>
			
			<form:label path = "artist_name">Artist Name:</form:label>
			<form:input path ="artist_name"/>
			<form:errors path = "artist_name"/>
			
			<form:label path = "genre">Genre:</form:label>
			<form:input path ="genre"/>
			<form:errors path = "genre"/>
			
			<form:input type = "hidden" path ="id" value = "${lecture.id}"/>
		</div>
		
		
		
		<input type = "submit" value = "Add Song"/>
	
	</form:form>
</body>
</html>