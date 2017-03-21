function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var size = userEntered.length;
  var passLength = passEntered.length;
  if(size <= 6 || userEntered.indexOf(' ') >= 0 ){//Show message that there is an error with the username...
    if (size <= 6) {
      document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    }
    else if (userEntered.indexOf(' ') >= 0) {
      document.getElementById("usernameError").innerHTML="Username must not contain spaces."
    }
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if (passEntered == "password" || passEntered == userEntered || passLength > 20
  || passLength < 6) {

    //Show message that there is an error with the password...
    if(passEntered == userEntered){
      document.getElementById("passwordError").innerHTML="Password cannot be the same as username.";
    }
    else if (passLength > 20) {
      document.getElementById("passwordError").innerHTML="Password must be less than 20 characters.";
    }
    else if (passLength < 6) {
      document.getElementById("passwordError").innerHTML="Password must be at least 6 characters.";
    }
    else if (passEntered == "password" || passEntered == "PASSWORD") {
      document.getElementById("passwordError").innerHTML="Password cannot be password.";
    }
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}

function register(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var size = userEntered.length;
  var passLength = passEntered.length;
  alert("Username: " + userEntered + " Password: " + passEntered);
}

function validateUsername(){
  var userEntered = document.getElementById("user").value;
  var size = userEntered.length;
  if(size <= 6 || userEntered.indexOf(' ') >= 0 ){
    if (size < 6) {
      document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    }
    if (userEntered.indexOf(' ') >= 0) {
      document.getElementById("usernameError").innerHTML="Username must not contain spaces.";
    }
  document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    document.getElementById("usernameError").innerHTML="";
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
  }
}

function validatePassword(){
  var passEntered = document.getElementById("pass").value;
  var userEntered = document.getElementById("user").value;
  var passLength = passEntered.length;
  if (passEntered == "password" || passEntered == userEntered || passLength > 20
  || passLength < 6) {

    //Show message that there is an error with the password...
    if(passEntered == userEntered){
      document.getElementById("passwordError").innerHTML="Password cannot be the same as username.";
    }
    else if (passLength > 20) {
      document.getElementById("passwordError").innerHTML="Password must be less than 20 characters.";
    }
    else if (passLength < 6) {
      document.getElementById("passwordError").innerHTML="Password must be at least 6 characters.";
    }
    else if (passEntered == "password" || passEntered == "PASSWORD") {
      document.getElementById("passwordError").innerHTML="Password cannot be password.";
    }
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else {
    document.getElementById("passwordError").innerHTML="";
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");
  }
}
