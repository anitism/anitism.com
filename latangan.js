<!-- Copyright © Anitism (Francis Brandon van Balkom). All rights reserved. -->

document.addEventListener("DOMContentLoaded", function () {
            fetch('./latangan.json')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                        document.querySelector(".latangan h1").innerHTML = json[0].title;
                        document.querySelector(".latangan p").innerHTML = json[0].paragraph;
                        document.querySelector(".shrines h2").innerHTML = json[1].title;
                        document.querySelector(".shrines p").innerHTML = json[1].paragraph;
                        document.querySelector(".mountkanlaon h2").innerHTML = json[2].title;
                        document.querySelector(".mountkanlaon h4").innerHTML = json[2].paragraph;
                        document.querySelector(".mountmadyaas h2").innerHTML = json[3].title;
                        document.querySelector(".mountmadyaas h4").innerHTML = json[3].paragraph;
            })
});
