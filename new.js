
var a = document.getElementById("mult")
console.log(a);
console.log(document.getElementById("mult").innerText);

function numbercalling(numid){
    var element = document.getElementById(numid).innerText;
    console.log(element);
    var display = document.getElementById("display").value;
    var show =  display + element;
    document.getElementById("display").value = show;
    return show;
}

function special(i){
    if(i == 'C'){
        document.getElementById("display").value = "";
    }
    if(i == 'equal'){
        document.getElementById('display').value = eval(document.getElementById('display').value);
    }
}