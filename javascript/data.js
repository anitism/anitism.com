/* Copyright © Anitism (Francis Brandon van Balkom). All rights reserved. */

        document.addEventListener("DOMContentLoaded", function () {

            fetch('./json/index.json')
                .then((response) => response.json())
                .then((json) => {
                    //Then json info is here
                    console.log(json);

                    for(var i = 0; i < json.length; i++)
                    {
                        document.querySelector(".content h1").innerHTML = json[i].title;
                        document.querySelector(".content p").innerHTML = json[i].content;
                    }
                })
        });
