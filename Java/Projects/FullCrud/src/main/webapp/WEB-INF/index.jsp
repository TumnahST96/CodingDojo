
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
   <!-- c:out ; c:forEach ; c:if -->
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
   <!-- Formatting (like dates) -->
 <%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
   <!-- form:form -->
 <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
   <!-- for rendering errors on PUT routes -->
 <%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Title Here</title>
  <!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">

</head>
<body>
    <div class="container"> <!-- Beginning of Container -->
        
	<h1>Login and Registration pAGE</h1>
	
	<form:form action="/register" method="post" modelAttribute="newUser">
	    <p>
	        <form:label path="userName">User Name</form:label>
	        <form:errors path="userName"/>
	        <form:input path="userName"/>
	    </p>
	    <p>
	        <form:label path="email">Email</form:label>
	        <form:errors path="email"/>
	        <form:input path="email"/>
	    </p>
	    <p>
	        <form:label path="password">Password</form:label>
	        <form:errors path="password"/>
	        <form:input type = "number" path="password"/>
	    </p>
	    <p>
	        <form:label path="confirm">Confirm Password</form:label>
	        <form:errors path="confirm"/>     
	        <form:input type="number" path="confirm"/>
	    </p>
	     
	     
	    <input type="submit" value="Register" class ="btn btn-primary" />
	</form:form>    
	
	
	
    </div> <!-- End of Container -->
    
    <div class = "col-4 order-last">
    	<form:form action="/login" method="post" modelAttribute="newLogin">
	  
	    <p>
	        <form:label path="email">Email</form:label>
	        <form:errors path="email"/>
	        <form:input path="email"/>
	    </p>
	    <p>
	        <form:label path="password">Password</form:label>
	        <form:errors path="password"/>
	        <form:input type = "number" path="password"/>
	    </p>
	    
	     
	     
	    <input type="submit" value="Login" class ="btn btn-success"/>
	</form:form>    
    </div>
</body>
</html>