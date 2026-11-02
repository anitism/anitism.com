/* Copyright © Anitism (Francis Brandon van Balkom). All rights reserved. */

const greetings = [
  "Good morning, welcome to Anitism. This website is created for educational and religious purposes.",
  "Good morning, welcome to Anitism. This website is created for educational and religious purposes.",
  "Good afternoon, welcome to Anitism. This website is created for educational and religious purposes.",
  "Good evening, welcome to Anitism. This website is created for educational and religious purposes."
];

const index = Math.floor(new Date().getHours() / 24 * greetings.length);
document.getElementById("greet").innerHTML = greetings[index];
