let Name = prompt("Adınız Nedir?", "");

if (Name != null) {
  document.getElementById("name").innerHTML =
    "Merhaba, " + Name + "! Hoş geldin!";
}

setInterval(function hoursNow() {
  let now = new Date();
  let day = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  document.getElementById("date").innerHTML =
    hours + ":" + minutes + ":" + seconds + " " + day[now.getDay()];
}, 1000);

hoursNow();
