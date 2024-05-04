document.addEventListener("DOMContentLoaded", function() {
    const regionSelect = document.getElementById("regionSelect");
    const profileResult = document.getElementById("profileResult");
    const processingMethodResult = document.getElementById("processingMethodResult");
    const roastLevelResult = document.getElementById("roastLevelResult");

    // Sample data for regions and their details
    const coffeeData = [
        {
            country: "Kenya",
            body: "Full",
            acidity: "High",
            floral: ["Bergamot"],
            fruit: ["Citrus", "Blackcurrant"],
            spices: [],
            others: []
        },
        {
            country: "India",
            body: "Full",
            acidity: "High",
            floral: [],
            fruit: [],
            spices: ["Clove", "Nutmeg", "Cardamom"],
            others: []
        },
        // Add more coffee data entries following the same pattern
    ];

    // Populate regions in the select dropdown
    function populateRegions() {
        coffeeData.forEach(coffee => {
            const option = document.createElement("option");
            option.textContent = coffee.country;
            option.value = JSON.stringify(coffee);
            regionSelect.appendChild(option);
        });
    }

    // Function to display the selected region's details
    function displayCoffeeDetails(selectedCoffee) {
        profileResult.innerHTML = `
            <h3>Flavor Profile</h3>
            <p><strong>Body:</strong> ${selectedCoffee.body}</p>
            <p><strong>Acidity:</strong> ${selectedCoffee.acidity}</p>
            <p><strong>Floral:</strong> ${selectedCoffee.floral.join(", ")}</p>
            <p><strong>Fruit:</strong> ${selectedCoffee.fruit.join(", ")}</p>
            <p><strong>Spices:</strong> ${selectedCoffee.spices.join(", ")}</p>
            <p><strong>Others:</strong> ${selectedCoffee.others.join(", ")}</p>
        `;

        // Display processing method and roast level
        const processingMethod = selectedCoffee.processingMethod || "Not specified";
        const roastLevel = selectedCoffee.roastLevel || "Not specified";
        processingMethodResult.textContent = processingMethod;
        roastLevelResult.textContent = roastLevel;
    }

    // Event listener for region select change
    regionSelect.addEventListener("change", function() {
        const selectedCoffee = JSON.parse(regionSelect.value);
        displayCoffeeDetails(selectedCoffee);
    });

    // Populate regions on page load
    populateRegions();
});
