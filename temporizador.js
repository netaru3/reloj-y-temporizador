let remoboton= document.getElementById("boton")

//function temporizadorUwU(){let temp=Number(document.getElementById("temporizador").value);
  //  let minutos= Number(document.getElementById("minutos").value);
   //let id= setInterval(function(){if((temp+ minutos*60)>=0){--temp;
     //   document.getElementById("tiem").textContent=temp+ minutos*60};
    //if((temp+ minutos*60)==0){document.getElementById("alarmasonido").play();
//clearInterval(id);alert("El tiempo ha terminado"); document.getElementById("alarmasonido").pause()
  //  }},1000); remoboton.remove()
//}
function temporizadorUwU(){let temp=Number(document.getElementById("temporizador").value);
    let minutos= Number(document.getElementById("minutos").value);
   let id= setInterval(function(){if(temp>=0){--temp;
        document.getElementById("seconds").textContent=temp;
    document.getElementById("minuts").textContent=minutos;
if(temp==0 && minutos!=0){--minutos; temp=temp+60}};
    if((temp+ minutos*60)==0){document.getElementById("alarmasonido").volume=1
      ; let confir=confirm("El tiempo ha terminado");
     confir(); if(confir===true){document.getElementById("alarmasonido").pause()}
clearInterval(id);
    }},1000);; remoboton.remove()
}
