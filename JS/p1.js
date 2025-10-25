let counter = 0;

function f1(){
    counter++
    console.log(counter)
}

let firstbut1 = document.getElementById("firstbut");

let myVar = setInterval(spostaDiv, 20);
let margin = 0;

let l = window.screen.width;
let w = 1300;
let direction = 1;

function spostaDiv() {

    if(direction === 1){
        if (margin >= w){
            direction = -1;
            margin -= 3;
        }else{
            margin += 3;
        }
    }else{
        if(margin < -1300){
            direction = 1;
            margin += 3;
        } else{
            margin -= 3;
        }
    }
    firstbut1.style.marginLeft = margin + 'px';
}

