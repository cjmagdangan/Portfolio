if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
    alert("Your browser supports text to speech!");
    var msgw = new SpeechSynthesisUtterance();
                 msgw.text = "Bingo na manga su garoll";
                  window.speechSynthesis.speak(msgw);

   }else{
     // Speech Synthesis Not Supported 😣
     alert("Sorry, your browser doesn't support text to speech!");
   }
let haveIt = [];
var count = 0;
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

            count++;
            document.getElementById("counts").innerHTML = "<p style='color:green'>Last call: <b>"+latest+ "</b></p>";
            if (latest.length>0) {
              latest.pop();
            }

            if (generate<=15) {
                document.getElementById("B").appendChild(h);
                var msg = new SpeechSynthesisUtterance();
                 msg.text = "B,"+generate;
                  window.speechSynthesis.speak(msg);

                  if (generate==1) {
                    var msg1 = new SpeechSynthesisUtterance();
                    msg1.text = "Unanoy";
                  window.speechSynthesis.speak(msg1);
                  } 
                  else if (generate==4) {
                    var msg1 = new SpeechSynthesisUtterance();
                    msg1.text = "Before and After";
                  window.speechSynthesis.speak(msg1);
                  }
                  else if (generate==8) {
                    var msg1 = new SpeechSynthesisUtterance();
                    msg1.text = "Ocho Walo Eight";
                  window.speechSynthesis.speak(msg1);
                  }
                  else if (generate==9) {
                    var msg1 = new SpeechSynthesisUtterance();
                    msg1.text = "Mayor, Binay";
                  window.speechSynthesis.speak(msg1);
                  }
                  else if (generate==10) {
                    var msg1 = new SpeechSynthesisUtterance();
                    msg1.text = "B ten na b ten";
                  window.speechSynthesis.speak(msg1);
                  }
                  else if (generate==11) {
                    var msg1 = new SpeechSynthesisUtterance();
                    msg1.text = "Uhugin";
                  window.speechSynthesis.speak(msg1);
                  }
                  else if (generate==13) {
                    var msg1 = new SpeechSynthesisUtterance();
                    msg1.text = "Trece Girl";
                  window.speechSynthesis.speak(msg1);
                  }
                  else if (generate==14) {
                    var msg1 = new SpeechSynthesisUtterance();
                    msg1.text = "Supsupan nang manga nguso";
                  window.speechSynthesis.speak(msg1);
                  }
                  else if (generate==15) {
                    var msg1 = new SpeechSynthesisUtterance();
                    msg1.text = "Happy fiesta";
                  window.speechSynthesis.speak(msg1);
                  }
                   else {
                    
                  }
            } 
            else if (generate>15&&generate<=30) {
                document.getElementById("I").appendChild(h);
                var msg = new SpeechSynthesisUtterance();
                 msg.text = "I,"+generate;
                  window.speechSynthesis.speak(msg);

                  if (generate==16) {
                    var msg2 = new SpeechSynthesisUtterance();
                    msg2.text = "Sweet 16";
                  window.speechSynthesis.speak(msg2);
                  } 
                  else if (generate==18) {
                    var msg2 = new SpeechSynthesisUtterance();
                    msg2.text = "Debut";
                  window.speechSynthesis.speak(msg2);
                  }
                  else if (generate==19) {
                    var msg2 = new SpeechSynthesisUtterance();
                    msg2.text = "Covid 19";
                  window.speechSynthesis.speak(msg2);
                  }
                  else if (generate==20) {
                    var msg2 = new SpeechSynthesisUtterance();
                    msg2.text = "Binti Malaki";
                  window.speechSynthesis.speak(msg2);
                  }
                  else if (generate==21) {
                    var msg2 = new SpeechSynthesisUtterance();
                    msg2.text = "Debut nang manga lalaki";
                  window.speechSynthesis.speak(msg2);
                  }
                  else if (generate==22) {
                    var msg2 = new SpeechSynthesisUtterance();
                    msg2.text = "Nanay lulu";
                  window.speechSynthesis.speak(msg2);
                  }
                  else if (generate==23) {
                    var msg2 = new SpeechSynthesisUtterance();
                    msg2.text = "Birthday of my creator";
                  window.speechSynthesis.speak(msg2);
                  }
                  else if (generate==25) {
                    var msg2 = new SpeechSynthesisUtterance();
                    msg2.text = "Pasko. Merry Christmas";
                  window.speechSynthesis.speak(msg2);
                  }
                  else if (generate==29) {
                    var msg2 = new SpeechSynthesisUtterance();
                    msg2.text = "Dead ball";
                  window.speechSynthesis.speak(msg2);
                  }
                  
                   else {
                    
                  }
            }
            else if (generate>30&&generate<=45) {
                document.getElementById("N").appendChild(h);
                var msg = new SpeechSynthesisUtterance();
                 msg.text = "N,"+generate;
                  window.speechSynthesis.speak(msg);

                  if (generate==35) {
                    var msg3 = new SpeechSynthesisUtterance();
                    msg3.text = "30, pac";
                  window.speechSynthesis.speak(msg3);
                  }

                  else if (generate==39) {
                    var msg3 = new SpeechSynthesisUtterance();
                    msg3.text = "Trinalyn";
                  window.speechSynthesis.speak(msg3);
                  }
                  else if (generate==40) {
                    var msg3 = new SpeechSynthesisUtterance();
                    msg3.text = "Revicon forte";
                  window.speechSynthesis.speak(msg3);
                  }
                  else if (generate==41) {
                    var msg3 = new SpeechSynthesisUtterance();
                    msg3.text = "For once in my life";
                  window.speechSynthesis.speak(msg3);
                  }
                  else if (generate==42) {
                    var msg3 = new SpeechSynthesisUtterance();
                    msg3.text = "Purtos";
                  window.speechSynthesis.speak(msg3);
                  }
                  else if (generate==45) {
                    var msg3 = new SpeechSynthesisUtterance();
                    msg3.text = "40, pac";
                  window.speechSynthesis.speak(msg3);
                  }

                   else {
                    
                  }
            }
            else if (generate>45&&generate<=60) {
                document.getElementById("G").appendChild(h);
                var msg = new SpeechSynthesisUtterance();
                 msg.text = "G,"+generate;
                  window.speechSynthesis.speak(msg);

                  if (generate==50) {
                    var msg4 = new SpeechSynthesisUtterance();
                    msg4.text = "Sala p";
                  window.speechSynthesis.speak(msg4);
                  } 
                  else if (generate==54) {
                    var msg4 = new SpeechSynthesisUtterance();
                    msg4.text = "Highway 54";
                  window.speechSynthesis.speak(msg4);
                  }
                  else if (generate==55) {
                    var msg4 = new SpeechSynthesisUtterance();
                    msg4.text = "Pacpac";
                  window.speechSynthesis.speak(msg4);
                  }
                  else if (generate==56) {
                    var msg4 = new SpeechSynthesisUtterance();
                    msg4.text = "Bumbay MIMI";
                  window.speechSynthesis.speak(msg4);
                  }
                  else if (generate==60) {
                    var msg4 = new SpeechSynthesisUtterance();
                    msg4.text = "Buntis";
                  window.speechSynthesis.speak(msg4);
                  }
                  
                   else {
                    
                  }
            }
            else if (generate>60&&generate<=75) {
                document.getElementById("O").appendChild(h);
                var msg = new SpeechSynthesisUtterance();
                 msg.text = "O,"+generate;
                  window.speechSynthesis.speak(msg);

                  if (generate==66) {
                    var msg5 = new SpeechSynthesisUtterance();
                    msg5.text = "siksik";
                  window.speechSynthesis.speak(msg5);
                  } 
                  else if (generate==69) {
                    var msg5 = new SpeechSynthesisUtterance();
                    msg5.text = "Baligtaran";
                  window.speechSynthesis.speak(msg5);
                  }
                  else if (generate==70) {
                    var msg5 = new SpeechSynthesisUtterance();
                    msg5.text = "Kalbo";
                  window.speechSynthesis.speak(msg5);
                  }
                  else if (generate==72) {
                    var msg5 = new SpeechSynthesisUtterance();
                    msg5.text = "Si benito";
                  window.speechSynthesis.speak(msg5);
                  }
                  else if (generate==75) {
                    var msg5 = new SpeechSynthesisUtterance();
                    msg5.text = "Matandang ooki";
                  window.speechSynthesis.speak(msg5);
                  }
                  
                   else {
                    
                  }
            }
            
            else {
                
            }
        }
        else{
            if (haveIt.length<75) {
                return roll();
            }
            else{
                var msg = new SpeechSynthesisUtterance();
                 msg.text = "Tamatama na manga su garoll";
                  window.speechSynthesis.speak(msg);
            alert("Wala na");
            count=0;
            }
        }
        if (count==10) {
          var msgCheck = new SpeechSynthesisUtterance();
                     msgCheck.text = "Wa la pa bang bibingo?" +count+ "calls na";
                      window.speechSynthesis.speak(msgCheck);
        }
        else if (count==20) {
          var msgCheck = new SpeechSynthesisUtterance();
                     msgCheck.text = "Wa la pa bang bibingo?" +count+ "calls na";
                      window.speechSynthesis.speak(msgCheck);
        }
        else if (count==30) {
          var msgCheck = new SpeechSynthesisUtterance();
                     msgCheck.text = "Wa la pa bang bibingo?" +count+ "calls na";
                      window.speechSynthesis.speak(msgCheck);
        }
        else if (count==40) {
          var msgCheck = new SpeechSynthesisUtterance();
                     msgCheck.text = "Wa la pa bang bibingo?" +count+ "calls na";
                      window.speechSynthesis.speak(msgCheck);
        }
        else if (count==50) {
          var msgCheck = new SpeechSynthesisUtterance();
                     msgCheck.text = "Wa la pa bang bibingo?" +count+ "calls na";
                      window.speechSynthesis.speak(msgCheck);
        }
        else if (count==60) {
          var msgCheck = new SpeechSynthesisUtterance();
                     msgCheck.text = "Wa la pa bang bibingo?" +count+ "calls na";
                      window.speechSynthesis.speak(msgCheck);
        }
}

function restart() {
    location.reload();
}
