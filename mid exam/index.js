// script.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic form validation (you can enhance this)
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    // You can perform further validation here, like checking email format, password strength, etc.

    // Assuming you want to display the submitted data (you can send it to a server instead)
    alert(`Thank you for signing up!\nName: ${name}\nEmail: ${email}`);

    // Reset the form
    document.getElementById("signup-form").reset();
}

// Attach form submission handler to the form element
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", handleSubmit);
