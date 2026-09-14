// ================= SEARCH BUTTON =================

const searchButton = document.getElementById("search");

searchButton.addEventListener("click", function () {

    // Get values
    const destination = document.getElementById("name").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const travelers = document.getElementById("aname").value.trim();


    // Check empty fields
    if (destination === "") {
        alert("Please enter your destination.");
        return;
    }

    if (checkin === "") {
        alert("Please select your check-in date.");
        return;
    }

    if (checkout === "") {
        alert("Please select your check-out date.");
        return;
    }

    if (travelers === "") {
        alert("Please enter travelers information.");
        return;
    }


    // Check dates
    if (checkout <= checkin) {
        alert("Check-out date must be after check-in date.");
        return;
    }


    // Successful search
    alert(
        "Search completed!\n\n" +
        "Destination: " + destination + "\n" +
        "Check-in: " + checkin + "\n" +
        "Check-out: " + checkout + "\n" +
        "Travelers: " + travelers
    );

});