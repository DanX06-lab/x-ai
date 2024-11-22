document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;

    if (userInput.trim()) {
        // Display user message
        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "user-message");
        userMessage.textContent = userInput;
        document.getElementById("chat-box").appendChild(userMessage);

        // Clear the input field
        document.getElementById("user-input").value = "";

        // Scroll to the bottom of the chat box
        document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;

        // Generate bot response
        setTimeout(function() {
            const botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot-message");
            botMessage.textContent = generateBotResponse(userInput);
            document.getElementById("chat-box").appendChild(botMessage);

            // Scroll to the bottom of the chat box
            document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
        }, 1000);
    }
});

function generateBotResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        return "Hi! How can I assist you today?";
    } else if (lowerInput.includes("help")) {
        return "I'm here to help. Ask me anything!";
    } else if (lowerInput.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else if (searchQuery) {
        // Create the Google search URL
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;

        // Open the Google search results in a new tab
        window.open(googleSearchUrl, "_blank");

        // Optionally, clear the input field
        document.getElementById("search-input").value = '';
    } else {
        alert("Please enter a search query.");
    }
});

        return "Sorry, I didn't quite get that. Could you try asking something else?";
    }
}
