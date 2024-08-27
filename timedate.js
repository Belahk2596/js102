const date = new Date().toDateString();
const time = new Date().toTimeString();
function ask() {
  let choice = prompt(
    "Do you want to see the current date or time? Enter 'date' or 'time'?"
  );
  if (choice == "date") {
    alert("The current date: " + date);
  } else if (choice == "time") {
    alert("The current time: " + time);
  } else {
    // Handle invalid input
    alert("Invalid choice. Please enter 'date' or 'time'.");
  }
}

ask();
