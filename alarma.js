function alarma() {let fecha2= document.getElementById("timer").value;
    if(fecha2==""){alert("ingrese un tiempo en la alarma"); return}
;const id=setInterval(function set(){let fecha= new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
hour12: false});
if(fecha===fecha2){document.getElementById("alarmasonido").play();alert("Sonó su alarma");
    clearInterval(id);document.getElementById("alarmasonido").pause(); 
}
document.getElementById("boton2").remove();
},1000)}
//debo crear un setInterval()
