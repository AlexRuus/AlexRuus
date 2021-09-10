

function randomBackground() {
 let arr = [];
 for(i = 0; i < 3; i++){
 arr[i] = Math.floor(Math.random() * 256);
}

 let backgroundR = "RGB(" + arr + ")";
 document.body.style.backgroundColor = backgroundR;
 document.querySelector('h1').innerHTML = backgroundR
}
