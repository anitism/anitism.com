        document.addEventListener("DOMContentLoaded", function () {

            fetch('./disclaimer.json')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                        document.querySelector(".contact h1").innerHTML = json[0].title;
                        document.querySelector(".contact p").innerHTML = json[0].paragraph;
                        document.querySelector(".disclaimer h2").innerHTML = json[1].title;
                        document.querySelector(".disclaimer p").innerHTML = json[1].paragraph;
                })
        });
