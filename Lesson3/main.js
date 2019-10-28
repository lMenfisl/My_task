var colorArray = ["#0404B4", "#FAC46E","#FF0000", "#FAD5BB", "#F2FEFF"]; 
var i = 0; 

function nextTap(){
    var next = document.querySelector('#demo').value;
    document.getElementById("demo").style.backgroundColor= colorArray[i]; 
    i++;
    if( i >= colorArray.length-1){
        i = 0;
    }
    next=colorArray[i];
}

function previousTap(){
    var next = document.querySelector('#demo').value;
    document.getElementById("demo").style.backgroundColor= colorArray[i]; 
    i--;
    if( i <= 0){
        i = colorArray.length-1;
    }
    next=colorArray[i];
}