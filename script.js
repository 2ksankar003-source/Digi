// Contact Form Submission Simulation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    document.getElementById("formMessage").innerText =
      "Thank you, " + name + "! Your message has been sent successfully.";
    document.getElementById("formMessage").style.color = "green";

    // Reset form
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("formMessage").innerText =
      "Please fill in all fields.";
    document.getElementById("formMessage").style.color = "red";
  }
});
