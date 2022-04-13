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
	<h3>Send an Omikuji</h3>

    <form action="/process" method="POST">
		<div>
	    	<input type="number" name="number">
		</div>
		<div>
	    	<input type='text' name='city' placeholder="Enter the name of any city.">
		</div>
		<div>
	    	<input type='text' name='person' placeholder="Enter the name of a person.">	
		</div>
		<div>
	    	<input type='text' name='hobby' placeholder="Enter the name of a hobby.">	
		</div>
		<div>
	    	<input type='text' name='animal' placeholder="Enter the name of an animal.">    	
		</div>
    	<textarea name="msg" placeholder="Say something nice to someone">
    	</textarea>
    	<input type='submit' value='Send'>
    </form>

</body>
</html>