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
        <h1>Ninjas for ${dojo.name}</h1>
        
        
    </div> <!-- End of Container -->
    
    <div >
			<table class = "table table-dark table-striped table-hover">
				<thead>
					<tr>
						<th class = "align-middle">First Name</th>
						<th class = "align-middle">Last Name</th>
					</tr>
				</thead>
				
				<tbody>
					<c:forEach var = "i" items = "${dojo.ninjas }">
						<tr>
							<td><p> <a href="/oneDojo/${i.id }">
							<c:out value = "${i.firstName }"></c:out></a>
							</p></td>
							
							<td>
							<c:out value = "${i.lastName }"></c:out>
							</td>
							
							
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
</body>
</html>