//Menu-toggle button Jquery
$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

//Scrolling Effect Jquery

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});


// Beginning of the form

// Dom declaration and variables

function validate() {
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;

  if (name.length < 1) {
    text = "Please Enter Name";
    document.getElementById("name").style.borderColor = "red";
    error_message.innerHTML = text;
    return false;
  } else {
    document.getElementById("name").style.borderColor = "green";
  }

  if (lastName.length < 1) {
    text = "Please Enter Last Name";
    document.getElementById("lastName").style.borderColor = "red";
    error_message.innerHTML = text;
    return false;
  } else {
    document.getElementById("lastName").style.borderColor = "green";
  }
  if (isNaN(phone) || phone.length < 1) {
    text = "Please Enter valid Phone Number";
    document.getElementById("phone").style.borderColor = "red";
    error_message.innerHTML = text;
    return false;
  } else {
    document.getElementById("phone").style.borderColor = "green";
  }
  if (email.indexOf("@") == -1 || email.length < 1) {
    text = "Please Enter valid Email";
    document.getElementById("email").style.borderColor = "red";
    error_message.innerHTML = text;
    return false;
  } else {
    document.getElementById("email").style.borderColor = "green";
  }
  if (message.length <= 5) {
    text = "Please Enter More Than 5 Characters";
    document.getElementById("message").style.borderColor = "red";
    error_message.innerHTML = text;
    return false;
  } else {
    document.getElementById("message").style.borderColor = "green";
  }
  alert("Form Submitted Successfully!");
  return true;
}
//End of the form






