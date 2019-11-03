var colorArray = ["#0404B4", "#FAC46E","#FF0000", "#FAD5BB", "#F2FEFF"]; 
var i = 0; 

function nextTap(){
    document.getElementById("demo").style.backgroundColor= colorArray[i]; 
        i = (i + colorArray.length + 1)%colorArray.length;
    document.getElementById("demo").style.backgroundColor= colorArray[i]; 
    }
    function previousTap(){
        document.getElementById("demo").style.backgroundColor= colorArray[i]; 
            i = (i + colorArray.length - 1)%colorArray.length;
        document.getElementById("demo").style.backgroundColor= colorArray[i]; 
        }