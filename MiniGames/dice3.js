let rand3 = Math.ceil(Math.random()*6);
if (rand3==1) {
    document.getElementById("dice3").style.backgroundColor = "white";
}
else if (rand3==2) {
    document.getElementById("dice3").style.backgroundColor = "pink";
}
else if (rand3==3) {
    document.getElementById("dice3").style.backgroundColor = "red";
}
else if (rand3==4) {
    document.getElementById("dice3").style.backgroundColor = "green";
}
else if (rand3==5) {
    document.getElementById("dice3").style.backgroundColor = "blue";
}
else if (rand3==6) {
    document.getElementById("dice3").style.backgroundColor = "yellow";
}
 else {
   document.writeln("Unknown Color")
}
