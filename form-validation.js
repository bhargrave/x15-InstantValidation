function validate(){
  //Grab the user's input and store in variablesszc
  var userEntered = document.getElementById("user").value;
  var txt = userEntered.length;
  if (txt < 6);

  //Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}
  function validate(){//Show message that there is an error with the password...
  var passEntered = document.getElementById("pass").value;
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
