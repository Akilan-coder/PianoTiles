let keys = document.querySelectorAll(".key");

let keyaud = [];

for (let j = 0; j < 12; j++) {
  keyaud[j] = new Audio();
}

keyaud[0].src = "audio\c-3.mp3";
keyaud[1].src = "audio\d-3.mp3";
keyaud[2].src = "audio\f-3.mp3";
keyaud[3].src = "audio\g-3.mp3";
keyaud[4].src = "audio\a-3.mp3";
keyaud[5].src = "audio\c3.mp3";
keyaud[6].src = "audio\d3.mp3";
keyaud[7].src = "audio\e3.mp3";
keyaud[8].src = "audio\f3.mp3";
keyaud[9].src = "audio\g3.mp3";
keyaud[10].src = "audio\a4.mp3";
keyaud[11].src = "audio\b3.mp3";

for (let i = 0; i < 12; i++) {
  keys[i].addEventListener("click", (e) => {
    console.log("hi");
    playsound(i);
  });
}

function playsound(i) {
  keyaud[i].currentTime = 0;
  keyaud[i].play();
}
