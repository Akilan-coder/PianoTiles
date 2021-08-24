let csharp = document.querySelector(".cs");
let dsharp = document.querySelector(".ds");
let fsharp = document.querySelector(".fs");
let gsharp = document.querySelector(".gs");
let asharp = document.querySelector(".as");

let cw = document.querySelector(".c");
let dw = document.querySelector(".d");
let ew = document.querySelector(".e");
let fw = document.querySelector(".f");
let gw = document.querySelector(".g");
let aw = document.querySelector(".a");
let bw = document.querySelector(".b");

let c = new Audio();
c.src = "c3.mp3";

let cs = new Audio();
cs.src = "c-3.mp3";

let d = new Audio();
d.src = "d3.mp3";

let ds = new Audio();
ds.src = "d-3.mp3";

let em = new Audio();
em.src = "e3.mp3";

let fm = new Audio();
fm.src = "f3.mp3";

let fs = new Audio();
fs.src = "f-3.mp3";

let gm = new Audio();
gm.src = "g3.mp3";

let gs = new Audio();
gs.src = "g-3.mp3";

let a = new Audio();
a.src = "a3.mp3";

let as = new Audio();
as.src = "a-3.mp3";

let b = new Audio();
b.src = "b3.mp3";

csharp.addEventListener("click", (e) => {
  cs.currentTime = 0;
  cs.play();
});

dsharp.addEventListener("click", (e) => {
  ds.currentTime = 0;
  ds.play();
});
fsharp.addEventListener("click", (e) => {
  fs.currentTime = 0;
  fs.play();
});
gsharp.addEventListener("click", (e) => {
  gs.currentTime = 0;
  gs.play();
});
asharp.addEventListener("click", (e) => {
  as.currentTime = 0;
  as.play();
});

cw.addEventListener("click", (e) => {
  c.currentTime = 0;
  c.play();
});
dw.addEventListener("click", (e) => {
  d.currentTime = 0;
  d.play();
});
ew.addEventListener("click", (e) => {
  em.currentTime = 0;
  em.play();
});
fw.addEventListener("click", (e) => {
  fm.currentTime = 0;
  fm.play();
});

aw.addEventListener("click", (e) => {
  a.currentTime = 0;
  a.play();
});

bw.addEventListener("click", (e) => {
  b.currentTime = 0;
  b.play();
});

gw.addEventListener("click", (e) => {
  gm.currentTime = 0;
  gm.play();
});
