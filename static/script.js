document.getElementById("spam-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission

    const message = document.getElementById("message").value; // Get message from textarea

    if (message.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    // Disable the button while processing
    const button = event.target.querySelector("button");
    button.disabled = true;
    button.innerText = "Checking...";

    // Send the message to Flask backend for prediction
    const response = await fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    });

    const data = await response.json();

    // Display the result
    const resultDiv = document.getElementById("result");
    const resultText = document.getElementById("spam-result");

    if (data.result) {
        resultText.textContent = data.result;
        resultText.classList.add(data.result.toLowerCase() === "spam" ? "safe" : "");
    } else {
        resultText.textContent = "Error: Could not process your request.";
    }

    // Show result div
    resultDiv.classList.remove("hidden");

    // Enable the button again
    button.disabled = false;
    button.innerText = "Check Spam";
});
