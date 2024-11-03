document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var templateParams = {
      from_name: document.getElementById("nameInput").value,
      from_email: document.getElementById("emailInput").value,
      subject: document.getElementById("subjectInput").value,
      message: document.getElementById("messageInput").value
    };
    emailjs.send(
      emailjsConfig.SERVICE_ID,
      emailjsConfig.TEMPLATE_ID,
      templateParams,
      emailjsConfig.USER_ID
    ).then(
      function(response) {
        console.log("SUCCESS!", response.status, response.text);
        // Display success message
        document.getElementById("contactForm").reset();
        document.querySelector(".sent-message-alert").style.display = "block";
        document.querySelector(".sent-message-alert").classList.add("alert", "alert-success");
        document.querySelector(".sent-message-alert").innerHTML = "Your message has been sent. Thank you!";
        setTimeout(function() {
          document.querySelector(".sent-message-alert").style.display = "none";
          document.querySelector(".sent-message-alert").classList.remove("alert", "alert-success");
          document.querySelector(".sent-message-alert").innerHTML = "";
        }, 3000);
      },
      function(error) {
        console.log("FAILED...", error);
        // Display error message
        document.querySelector(".error-message-alert").style.display = "block";
        document.querySelector(".error-message-alert").classList.add("alert", "alert-danger");
        document.querySelector(".error-message-alert").innerHTML = "Error sending email. Please try again.";
        setTimeout(function() {
          document.querySelector(".error-message").style.display = "none";
          document.querySelector(".error-message").classList.remove("alert", "alert-danger");
          document.querySelector(".error-message").innerHTML = "";
        }, 3000);
      }
    );
  });