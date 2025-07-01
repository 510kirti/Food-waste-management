document.querySelector("form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !email || !message) {
      e.preventDefault(); // stop the form from submitting
      alert("Please fill out all fields.");
    } else if (!email.includes("@")) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    }
  });


document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual submission

    alert("Thank you! Your message has been sent.");
    this.reset(); // clear the form
  });