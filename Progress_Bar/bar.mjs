import "./styles.css";
let progress = 0;

let bar = document.getElementById("progress-bar");

const timer = setInterval(()=>{
    if(progress >= 100){
        clearInterval(timer);
    }
    else{
        progress++;
        bar.style.width = progress + "%";
    }
} , 20);

