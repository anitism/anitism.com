<!-- Copyright © Anitism (Francis Brandon van Balkom). All rights reserved. -->

document.addEventListener("DOMContentLoaded", function () {

            fetch('./index.json')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                        document.querySelector(".anitism h1").innerHTML = json[0].title;
                        document.querySelector(".anitism p").innerHTML = json[0].paragraph;
                        document.querySelector(".welcome h1").innerHTML = json[1].title;
                })
        });
