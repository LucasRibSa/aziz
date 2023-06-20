let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 10000)

function nextImage() {
    count++;
    if(count>7){
        count =1;
    }

    document.getElementById("radio"+count).checked = true;
}

let count2 = 8;
document.getElementById("radio8").checked = true;

setInterval(function(){
    nextImage2();
}, 10000)

function nextImage2() {
    count2++;
    if(count2>21){
        count2 = 8;
    }
    document.getElementById("radio"+count2).checked = true;
}