let keys = document.querySelectorAll(".key");

let keyaud = [];

for (let j = 0; j < 12; j++) {
  keyaud[j] = new Audio();
}

keyaud[0].src = "c-3.mp3";
keyaud[1].src = "d-3.mp3";
keyaud[2].src = "f-3.mp3";
keyaud[3].src = "g-3.mp3";
keyaud[4].src = "a-3.mp3";
keyaud[5].src = "c3.mp3";
keyaud[6].src = "d3.mp3";
keyaud[7].src = "e3.mp3";
keyaud[8].src = "f3.mp3";
keyaud[9].src = "g3.mp3";
keyaud[10].src = "a4.mp3";
keyaud[11].src = "b3.mp3";

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
