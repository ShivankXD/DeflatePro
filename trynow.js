// Get the modal
var modal = document.getElementById("graphModal");

// Get the image that opens the modal
var img = document.getElementById("graphPreview");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the image, open the modal 
img.onclick = function() {
    modal.style.display = "block";
    // Here you can render your full graph in the canvas
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById("calbtn").addEventListener("click", function() {
    // Scroll to the target section smoothly
    const targetSection = document.getElementById("target");
    targetSection.scrollIntoView({ behavior: "smooth" });
});


let isYearBased = true;

function toggleInput() {
    if (isYearBased) {
        document.getElementById("yearInput").style.display = "none";
        document.getElementById("dateInput").style.display = "block";
        document.getElementById("toggleButton").innerText = "Switch to Year Based";
    } else {
        document.getElementById("yearInput").style.display = "block";
        document.getElementById("dateInput").style.display = "none";
        document.getElementById("toggleButton").innerText = "Switch to Date Range";
    }
    isYearBased = !isYearBased;
}

function updateRateDisplay(value) {
    document.getElementById("rateDisplay").value = value;
}

function calculateInflation() {
    const currentCost = parseFloat(document.getElementById("currentCost").value);
    const inflationRate = parseFloat(document.getElementById("inflationRate").value);

    let years = 0;
    if (isYearBased) {
        years = parseInt(document.getElementById("years").value);
    } else {
        const startYear = parseInt(document.getElementById("startDate").value);
        const endYear = parseInt(document.getElementById("endDate").value);
        years = endYear - startYear;
    }

    const futureCost = currentCost * Math.pow((1 + inflationRate / 100), years);
    const costIncrease = futureCost - currentCost;

    document.getElementById("currentCostDisplay").innerText = `₹${currentCost.toFixed(2)}`;
    document.getElementById("futureCostDisplay").innerText = `₹${futureCost.toFixed(2)}`;
    document.getElementById("costIncreaseDisplay").innerText = `₹${costIncrease.toFixed(2)}`;

    // Update battery height based on future cost percentage
    const percentage = Math.min((futureCost / currentCost) * 100, 100);
    document.getElementById("energyFlow").style.height = `${percentage}%`;
}



