<!-- Copyright © Anitism (Francis Brandon van Balkom). All rights reserved. -->

document.addEventListener("DOMContentLoaded", function () {

            fetch('./diwata.json')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                        document.querySelector(".diwata h1").innerHTML = json[0].title;
                        document.querySelector(".diwata p").innerHTML = json[0].paragraph;
                        document.querySelector(".divinity h1").innerHTML = json[1].title;
                        document.querySelector(".divinity p").innerHTML = json[1].paragraph;
                        document.querySelector(".divineentities h2").innerHTML = json[2].title;
                        document.querySelector(".diwataofharvest h5").innerHTML = json[3].title;
                        document.querySelector(".diwataofharvest p").innerHTML = json[3].paragraph;
                        document.querySelector(".diwataofskies h5").innerHTML = json[4].title;
                        document.querySelector(".diwataofskies p").innerHTML = json[4].paragraph;
                        document.querySelector(".diwataofdeath h5").innerHTML = json[5].title;
                        document.querySelector(".diwataofdeath p").innerHTML = json[5].paragraph;
                        document.querySelector(".diwataofredemption h5").innerHTML = json[6].title;
                        document.querySelector(".diwataofredemption p").innerHTML = json[6].paragraph;
                        document.querySelector(".diwataoftorment h5").innerHTML = json[7].title;
                        document.querySelector(".diwataoftorment p").innerHTML = json[7].paragraph;
                        document.querySelector(".diwataofwar h5").innerHTML = json[8].title;
                        document.querySelector(".diwataofwar p").innerHTML = json[8].paragraph;
                        document.querySelector(".miscellaneous h5").innerHTML = json[9].title;
                        document.querySelector(".miscellaneous p").innerHTML = json[9].paragraph;
                })
        });
