const chatButtons = document.querySelectorAll(".chat-button");
const chatModal = document.getElementById("chatModal");
const closeButton = document.querySelector(".close-button");
const chatHistory = document.getElementById("chatHistory");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

// Array of possible therapist responses
const therapistResponses = [
    "Thank you for your message. How can I assist you today?",
    "I'm here to listen. Please share what's on your mind.",
    "It's great that you're reaching out. What would you like to talk about?",
    "I appreciate your openness. Let's explore your thoughts together.",
    "How does that make you feel? I'm here to help you process it.",
    "Can you tell me more about that? I'm interested in hearing your story.",
    "It's important to express your feelings. What would you like to discuss?",
    "Thank you for sharing. Let's work through this together.",
    "Your feelings are valid. How can I support you right now?",
    "What you're experiencing is significant. I'm here to help you navigate it.",
];

// Initialize the response index
let responseIndex = 0;

// Event listeners for chat buttons
chatButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const therapistName = button.previousElementSibling.innerText; // Get therapist name
        document.getElementById(
            "modalTitle"
        ).innerText = `Chat with ${therapistName}`; // Set modal title
        chatModal.style.display = "block";
        chatHistory.innerHTML = ""; // Clear chat history when opening modal
        responseIndex = 0; // Reset response index when opening modal
    });
});

// Close modal
closeButton.addEventListener("click", () => {
    chatModal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === chatModal) {
        chatModal.style.display = "none";
    }
});

// Function to send a message
function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        // Display user message
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message"); // Add user-message class
        userMessage.textContent = message;
        chatHistory.appendChild(userMessage);

        // Simulate therapist response
        setTimeout(() => {
            const therapistMessage = document.createElement("div");
            therapistMessage.classList.add("chat-message", "therapist-message"); // Add therapist-message class

            // Use the current response index and increment it
            if (responseIndex < therapistResponses.length) {
                therapistMessage.textContent = therapistResponses[responseIndex];
                responseIndex++;
            } else {
                // Reset index if we reach the end of the responses
                therapistMessage.textContent =
                    "I'm here for you. Please continue sharing.";
            }

            chatHistory.appendChild(therapistMessage);
            chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom
        }, 1000); // Simulate a delay for therapist response

        userInput.value = ""; // Clear input field
        chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom
    }
}

// Send button functionality
sendButton.addEventListener("click", sendMessage);

// Add event listener for the Enter key
userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default action (e.g., new line)
        sendMessage(); // Call the sendMessage function
    }
});