/* Copyright © Anitism (Francis Brandon van Balkom). All rights reserved. */

        document.addEventListener("DOMContentLoaded", function () {

            fetch('./json/index.json')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                        document.querySelector(".content h1").innerHTML = json[0].title;
                        document.querySelector(".content p").innerHTML = json[0].content;
                    }
                })
        });
