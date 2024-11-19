function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for your message! We will get back to you soon."); // Show alert
    // Optionally, you can reset the form after submission
    document.getElementById("contact-form").reset();
}