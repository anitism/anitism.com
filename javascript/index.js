        document.addEventListener("DOMContentLoaded", function () {

            fetch('./index.json')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                        document.querySelector(".content h1").innerHTML = json[0].title;
                        document.querySelector(".content p").innerHTML = json[0].paragraph1
                        document.querySelector(".content p").innerHTML = json[0].paragraph2;
                        document.querySelector(".content p").innerHTML = json[0].paragraph3;
                        document.querySelector(".content p").innerHTML = json[0].paragraph4;
                })
        });
