/* Copyright © Anitism (Francis Brandon van Balkom). All rights reserved. */

const greetings = [
  "Good morning, ",
  "Good morning, ",
  "Good afternoon, ",
  "Good evening, "
];

const index = Math.floor(new Date().getHours() / 24 * greetings.length);
document.getElementById("greet").innerHTML = greetings[index];
