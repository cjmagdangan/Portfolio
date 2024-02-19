


let rand1 = Math.ceil(Math.random()*6);
if (rand1==1) {
    document.getElementById("dice1").style.backgroundColor = "white";

}
else if (rand1==2) {
    document.getElementById("dice1").style.backgroundColor = "pink";
}
else if (rand1==3) {
    document.getElementById("dice1").style.backgroundColor = "red";
}
else if (rand1==4) {
    document.getElementById("dice1").style.backgroundColor = "green";
}
else if (rand1==5) {
    document.getElementById("dice1").style.backgroundColor = "blue";
}
else if (rand1==6) {
    document.getElementById("dice1").style.backgroundColor = "yellow";
}
 else {
    document.writeln("Unknown Color");
}
