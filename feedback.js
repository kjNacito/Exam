function validate(){
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["instructor"].value;
    var z = document.forms["myForm"]["feedback"].value;

    


    if (x == "") {
        alert("Course Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Instructor Name must be filled out");
        return false;
    }
    if (z == "") {
        alert("Feedback must be filled out");
        return false;
    }

    return alert("Success!");

    }
