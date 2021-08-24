let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let c = new Audio();
c.src ="c3.mp3";

let cs = new Audio();
cs.src ="c-3.mp3";

let d = new Audio();
d.src ="d3.mp3";

let ds = new Audio();
ds.src ="d-3.mp3";

let e = new Audio();
e.src ="e3.mp3";

let es = new Audio();
es.src ="e-3.mp3";

let f = new Audio();
f.src ="f3.mp3";

let fs = new Audio();
fs.src ="f-3.mp3";

let g = new Audio();
g.src ="g3.mp3";

let gs = new Audio();
gs.src ="g-3.mp3";

let a = new Audio();
a.src ="a3.mp3";

let as = new Audio();
as.src ="a-3.mp3";

let b = new Audio();
b.src ="b3.mp3";

let bs = new Audio();
b.src ="b-3.mp3";



for(let i = 1; i<8;i++ )
{
ctx.fillStyle = "white";
ctx.fillRect(60*i,100,60,300);
ctx.fillStyle = "gray";
ctx.strokeRect(60*i,100,60,300);

}

ctx.fillStyle = "black";
ctx.fillRect(100,100,40,200);
ctx.fillRect(160,100,40,200);
ctx.fillRect(280,100,40,200);
ctx.fillRect(340,100,40,200);
ctx.fillRect(400,100,40,200);
