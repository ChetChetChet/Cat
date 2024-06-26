function convert() {
    let humanAge = parseFloat(document.getElementById("humanyr").value);
    let catAge = parseFloat(document.getElementById("catyr").value);

    if (!isNaN(humanAge) && humanAge >= 0) {
        if (humanAge == 1) {
            document.getElementById("catyr").value = 15;
        } else if (humanAge == 2) {
            document.getElementById("catyr").value = 24;
        } else if (humanAge > 2) {
            document.getElementById("catyr").value = 24 + (humanAge - 2) * 4;
        }

    } else if (!isNaN(catAge) && catAge >= 0) {
        if (catAge == 15) {
            document.getElementById("humanyr").value = 1;
        } else if (catAge == 24) {
            document.getElementById("humanyr").value = 2;
        } else if (catAge > 24) {
            document.getElementById("humanyr").value = 2 + (catAge - 24) / 4;
        }

    } else {
        alert("Invalid input!");
    }
}
