let rand2 = Math.ceil(Math.random()*6);
if (rand2==1) {
    document.getElementById("dice2").style.backgroundColor = "white";
}
else if (rand2==2) {
    document.getElementById("dice2").style.backgroundColor = "pink";
}
else if (rand2==3) {
    document.getElementById("dice2").style.backgroundColor = "red";
}
else if (rand2==4) {
    document.getElementById("dice2").style.backgroundColor = "green";
}
else if (rand2==5) {
    document.getElementById("dice2").style.backgroundColor = "blue";
}
else if (rand2==6) {
    document.getElementById("dice2").style.backgroundColor = "yellow";
}
 else {
   document.writeln("Unknown Color")
}
