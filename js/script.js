document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create a data object to send
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Send data to the server (you need to replace 'your-server-endpoint' with your actual server URL)
    fetch("your-server-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Show a success message
          document.getElementById("responseMessage").innerText =
            "Thank you for your message! We'll get back to you soon.";
          // Clear the form
          document.getElementById("contactForm").reset();
        } else {
          throw new Error("Something went wrong. Please try again later.");
        }
      })
      .catch((error) => {
        // Show an error message
        document.getElementById("responseMessage").innerText = error.message;
      });
  });
