/* Copyright © Anitism (Francis Brandon van Balkom). All rights reserved. */

const greetings = [
  "Good morning, welcome to Anitism.",
  "Good morning, welcome to Anitism.",
  "Good afternoon, welcome to Anitism.",
  "Good evening, welcome to Anitism."
];

const index = Math.floor(new Date().getHours() / 24 * greetings.length);
document.getElementById("greet").innerHTML = greetings[index];
