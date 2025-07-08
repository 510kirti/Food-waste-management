document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const repeatPass = document.getElementById('repeat').value.trim();

    if (!email || !password || !name || !phone || !repeatPass) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate login
    // console.log("Email:", email);
    // console.log("Password:", password);

    // Redirect or show success
    alert("Signed in successfully!");
});

