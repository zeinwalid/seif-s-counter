let number = document.getElementById("number");
let counter =0;
let increaser = document.getElementById("increaser");
let decreaser = document.getElementById("decreaser");
let reset  = document.getElementById("reset");

increaser.onclick = ()=>{
    number.textContent=counter;
    counter = counter +1
}

decreaser.onclick = ()=>{
    number.textContent=counter;
    counter = counter-1
}

reset.onclick = ()=>{
    number.textContent=counter;
    counter =0;
}






