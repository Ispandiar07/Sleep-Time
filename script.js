function calc(){
const sleep = document.getElementById("sleep").value;
const wake = document.getElementById("wake").value;
if(!sleep || !wake) return;

let [sh,sm]=sleep.split(":").map(Number);
let [wh,wm]=wake.split(":").map(Number);

let start = sh*60+sm;
let end = wh*60+wm;
if(end < start) end += 1440;

let mins = end-start;
let hours = (mins/60).toFixed(1);

document.getElementById("result").textContent =
"Ұйқы уақыты: "+hours+" сағат";

document.getElementById("advice").textContent =
hours < 7 ? "Көбірек демалуға тырыс 😴" : "Жақсы ұйықтадың 👍";
}
