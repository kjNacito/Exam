
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;


if ( username == "student1" && password == "1234"){
alert ("Login Successfully!");
window.location = "studentpage.html"; 
return false;
}
else{
    if ( username == "teacher1" && password == "1234"){
        alert ("Login Successfully!");
        window.location = "teacherpage.html"; 
        return false;
    }
    else if ( username == "admin" && password == "admin"){
        alert ("Login Successfully!");
        window.location = "adminpage.html";
        return false;
    }

    else{
        alert ("Login Failed");
    }


}
    
}


