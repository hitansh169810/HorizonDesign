function sendEmailDefault(){
  var email = "hitansh169810@gmail.com";
  var subject = "Test Email";
  var msgBody = "Thank you for contacting us, we will get back to you in 24 hours!";
  alert("sending mail");
  window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}