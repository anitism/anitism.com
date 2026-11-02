        document.addEventListener("DOMContentLoaded", function () {

            fetch('./index.json')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                        document.querySelector(".side-content-01 h1").innerHTML = json[0].title;
                        document.querySelector(".side-content-01 p").innerHTML = json[0].paragraph;
                })
        });
