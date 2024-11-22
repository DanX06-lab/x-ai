document.getElementById("search-btn").addEventListener("click", function() {
    const searchQuery = document.getElementById("search-input").value.trim();

    // Check if the input is not empty
    if (searchQuery) {
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
