//your JS code here. If required.
function daysOfAYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366;
    } else {
        return 365;
    }
}

let userInput = prompt("Enter a year: ");

let year = parseInt(userInput);

if (isNaN(year) || year < 1 || year > 9999) {
    console.log("Invalid input. Please enter a valid year between 1 and 9999.");
}else {
     let days = daysOfAYear(year);
     console.log(`The year ${year} has ${days} days.`);
}
