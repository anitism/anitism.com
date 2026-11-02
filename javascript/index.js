        document.addEventListener("DOMContentLoaded", function () {

            fetch('./index.json')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                        document.querySelector(".content h1").innerHTML = json[0].title;
                for (let i = 1; i <= 4; i++) {
                        document.querySelector(".content p").innerHTML = json[0].paragraph"+i+";
                }
                })
        });
