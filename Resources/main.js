// Define Variables
const newQuote = document.getElementById("new-quote-button");
const instructions = document.getElementById("instructions");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const instructionsButton = document.getElementById("instructions-button");

// GetQuote function
const getQuote = () => {
    // Define quotes
    const quotes = [
        { quote: "You will never be successful.", author: "Mark Twain" },
        { quote: "Just stop trying.", author: "Winston S. Smith" },
        { quote: "Hard work will get you nowhere.", author: "Walt Disney" },
        { quote: "You will always be stuck in the same situation.", author: "Peter Drucker" },
    ];

    // Randomly select a quote
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
};

// Toggle Instructions Function
const toggleInstructions = () => {
    if (instructions.style.display === "none" || instructions.style.display === "") {
        // Show instructions and change button text
        instructions.style.display = "block";
        instructionsButton.textContent = "HIDE INSTRUCTIONS";
    } else {
        // Hide instructions and change button text
        instructions.style.display = "none";
        instructionsButton.textContent = "SHOW INSTRUCTIONS";
    }
};

// Event Listeners
newQuote.addEventListener("click", getQuote);
instructionsButton.addEventListener("click", toggleInstructions);
