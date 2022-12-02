<%@page import="java.net.URLEncoder"%>
<%@page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
response.setCharacterEncoding("EUC-KR");
String path = request.getServletContext().getRealPath("img");
System.out.println(path);

MultipartRequest mr = new MultipartRequest(request,path,30*1024*1024,"EUC-KR",new DefaultFileRenamePolicy());
String name = mr.getParameter("name");
double height = Double.parseDouble(mr.getParameter("height"));
double weight = Double.parseDouble(mr.getParameter("weight"));
height /= 100;
double bmi = weight / (height*height);
String result = "저체중";
if (bmi >= 40) {
	result = "고도비만";
}else if (bmi >=35) {
	result ="중증도비만";
}else if(bmi >=30) {
	result = " 경도비만";
}else if(bmi >=25) {
	result ="과체중";
}else if(bmi >18.5) {
	result ="정상";
}
String bmi2= String.format("%.2f",bmi);

String image = mr.getFilesystemName("photo");
image = URLEncoder.encode(image,"EUC-KR");
image = image.replace("+"," ");

%>
<table>
<tr>
<th>BMI Result</th>

</tr>
<tr>
<td>키</td>
<td><%=height * 100 %>cm</td>
</tr>

<tr>
<td>몸무게</td>
<td><%=weight %>kg</td>
</tr>

<tr>
<td>BMI</td>
<td><%=bmi2 %></td>
</tr>

<tr>
<td>당신은 <%=result %>입니다</td>
</tr>

<tr>
<td><img src="img/<%=name %>" style="max-width: 60%; height: auto;"></td>
</tr>
</table>

</body>
</html>