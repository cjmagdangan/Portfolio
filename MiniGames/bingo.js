if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
    alert("Your browser supports text to speech!");


   }else{
     // Speech Synthesis Not Supported 😣
     alert("Sorry, your browser doesn't support text to speech!");
   }
let haveIt = [];
var latest = [];

function roll() {
  
    let generate = Math.ceil(Math.random()*75);
    //generate = Number(generate);
        if(!haveIt.includes(generate)) {
            var h=document.createElement("p");
            var t=document.createTextNode(generate);
            h.appendChild(t);
            document.body.appendChild(h);
            haveIt.push(generate);
                        latest.push(generate);

             document.getElementById("counts").innerHTML = "<p style='color:green'>Last call: <b>"+latest+ "</b></p>";
            if (latest.length>0) {
              latest.pop();
            }
            if (generate<=15) {
                document.getElementById("B").appendChild(h);
                var msg = new SpeechSynthesisUtterance();
                 msg.text = "B,"+generate;
                  window.speechSynthesis.speak(msg);
            } 
            if (generate>15&&generate<=30) {
                document.getElementById("I").appendChild(h);
                var msg = new SpeechSynthesisUtterance();
                 msg.text = "I,"+generate;
                  window.speechSynthesis.speak(msg);
            }
            if (generate>30&&generate<=45) {
                document.getElementById("N").appendChild(h);
                var msg = new SpeechSynthesisUtterance();
                 msg.text = "N,"+generate;
                  window.speechSynthesis.speak(msg);
            }
            if (generate>45&&generate<=60) {
                document.getElementById("G").appendChild(h);
                var msg = new SpeechSynthesisUtterance();
                 msg.text = "G,"+generate;
                  window.speechSynthesis.speak(msg);
            }
            if (generate>60&&generate<=75) {
                document.getElementById("O").appendChild(h);
                var msg = new SpeechSynthesisUtterance();
                 msg.text = "O,"+generate;
                  window.speechSynthesis.speak(msg);
            }
            
            else {
                
            }
        }
        else{
            if (haveIt.length<75) {
                return roll();
            }
            else{
            alert("Wala na");
            }
        }
}

function restart() {
    location.reload();
}

