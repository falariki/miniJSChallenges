//returns the day of the week for the given date

function dayName(date) {
  daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfTheWeek[date.getDay()];
}

// Returns a greeting for the given date.

function greeting(date) {
  return `Hello people of Toronto! Happy ${dayName(date)}`;
}
