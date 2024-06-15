function calculateAge() {
    var today = new Date();
    var birthDate = new Date();

    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    birthDate.setFullYear(year, month - 1, day); // Month is zero-indexed

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Format birthDate for display
    var birthDateString = birthDate.getDate() + "-" + (birthDate.getMonth() + 1) + "-" + birthDate.getFullYear();

    // Prepare the output message
    var resultMessage = "Date of Birth: " + birthDateString + "<br>";
    resultMessage += "Your age is: " + age;

    // Display the result message in the HTML element
    document.getElementById("result").innerHTML = resultMessage;
}
