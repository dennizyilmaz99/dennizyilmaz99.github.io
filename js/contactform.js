var formElement = document.getElementById("contact-form");
var messageElement = document.getElementById("message");


formElement.addEventListener("submit", function(e){
    e.preventDefault();

    var formData = new FormData(formElement);
    var fname = formData.get("fname")

    messageElement.innerHTML = `Thank you for your message ${fname}!`;

});