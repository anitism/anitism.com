        document.addEventListener("DOMContentLoaded", function () {

            fetch('./balaan.json')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                        document.querySelector(".balaan h1").innerHTML = json[0].title;
                        document.querySelector(".balaan p").innerHTML = json[0].paragraph;
                        document.querySelector(".scriptures h1").innerHTML = json[1].title;
                        document.querySelector(".scriptures p").innerHTML = json[1].paragraph;
                        document.querySelector(".laonofmountkanlaon h2").innerHTML = json[2].title;
                        document.querySelector(".laonofmountkanlaon p").innerHTML = json[2].paragraph;
                        document.querySelector(".makaptanofthehighestsky h2").innerHTML = json[3].title;
                        document.querySelector(".makaptanofthehighestsky p").innerHTML = json[3].paragraph;
                        document.querySelector(".sidapaofmountmadyaas h2").innerHTML = json[4].title;
                        document.querySelector(".sidapaofmountmadyaas p").innerHTML = json[4].paragraph;
                        document.querySelector(".warandplundering h2").innerHTML = json[5].title;
                        document.querySelector(".warandplundering p").innerHTML = json[5].paragraph;
                        document.querySelector(".theinfernalregions h2").innerHTML = json[6].title;
                        document.querySelector(".theinfernalregions p").innerHTML = json[6].paragraph;
                })
        });
