let remoboton= document.getElementById("boton")
function temporizadorUwU(){let temp=Number(document.getElementById("temporizador").value);
   let id= setInterval(function(){if(temp>=0){--temp;
        document.getElementById("tiem").textContent=temp};
    if(temp==0){document.getElementById("alarmasonido").play();
clearInterval(id);alert("El tiempo ha terminado"); document.getElementById("alarmasonido").pause()
    }},1000); remoboton.remove()
}
