const textArea = document.getElementById('input');
const velocity = document.getElementById('velocity');
let amount = 0;
let time = 0;
let firstTime=false;

textArea.addEventListener('keyup', function(e) {
    if(!firstTime){
        firstTime=true;
        setInterval(() => {
            time++;
        }, 1000);
    }
    if(e.key === ' ' && time>0){
        amount++;
        velocity.innerHTML = (amount/time).toFixed(2);
    }
})

/*
let textArea = document.getElementById('input');
let velocity = document.getElementById('velocity');
let amount = 0;
let time = 0;

setInterval(() => {
    textArea.addEventListener('keyup', function(e) {
        if(e.key === ' ' && time>0){
            amount++;
            console.log(amount, time);
        }
    })
    velocity.innerHTML = (amount/time).toFixed(2);
    time++;
}, 1000)*/