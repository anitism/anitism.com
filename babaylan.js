<!-- Copyright © Anitism (Francis Brandon van Balkom). All rights reserved. -->

document.addEventListener("DOMContentLoaded", function () {

            fetch('./babaylan.json')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                        document.querySelector(".babaylan h1").innerHTML = json[0].title;
                        document.querySelector(".babaylan p").innerHTML = json[0].paragraph;
                        document.querySelector(".shamans h2").innerHTML = json[1].title;
                        document.querySelector(".shamans p").innerHTML = json[1].paragraph;
                        document.querySelector(".omens h2").innerHTML = json[2].title;
                        document.querySelector(".omens p").innerHTML = json[2].paragraph;
                        document.querySelector(".spirits h2").innerHTML = json[3].title;
                        document.querySelector(".spirits p").innerHTML = json[3].paragraph;
                        document.querySelector(".sacrifices h2").innerHTML = json[4].title;
                        document.querySelector(".sacrifices p").innerHTML = json[4].paragraph;
                })
        });
