let promptName = prompt("Lutfen adinizi giriniz: ")
let userName = document.querySelector("#userName")
userName.innerHTML = `<h1>${userName.innerHTML} Merhaba, <strong>${promptName}</strong>! Hoş geldin!  </h1>`

function GetTime() {

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();

    let clockHour = document.querySelector("#hour")
    clockHour.innerHTML = `${hour}:`
    let clockMinutes = document.querySelector("#minute")
    clockMinutes.innerHTML = `${minutes}:`
    let clockSeconds = document.querySelector("#second")
    clockSeconds.innerHTML = `${second} `

    let dayOfWeeks = document.getElementById("day");
    let day = now.getDay();

    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    dayOfWeeks.innerHTML = day;
}
setInterval(GetTime, 1000)
