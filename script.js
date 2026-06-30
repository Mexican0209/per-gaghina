const quotes=[

"Ogni giorno con te è il mio preferito.",

"Sei il mio posto felice.",

"Ti sceglierei altre mille volte.",

"Casa è ovunque ci sei tu.",

"Il mio cuore ha imparato il tuo nome."

];

document.getElementById("quote").innerHTML=

quotes[Math.floor(Math.random()*quotes.length)];

const start=new Date("2024-02-14");

function update(){

const now=new Date();

const diff=now-start;

const days=Math.floor(diff/1000/60/60/24);

const hours=Math.floor(diff/1000/60/60)%24;

const minutes=Math.floor(diff/1000/60)%60;

const seconds=Math.floor(diff/1000)%60;

document.getElementById("timer").innerHTML=

`${days} giorni ${hours} ore ${minutes} minuti ${seconds} secondi`;

}

setInterval(update,1000);

update();

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.fontSize=(15+Math.random()*25)+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>heart.remove(),10000);

}

setInterval(createHeart,700);
