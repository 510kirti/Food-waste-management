document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate login
    console.log("Email:", email);
    console.log("Password:", password);

    // Redirect or show success
    alert("Signed in successfully!");
});

