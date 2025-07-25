 tiempo= new Date()
let i=0
setInterval(function() {let tiempo=new Date();let ahora=tiempo.toLocaleTimeString();
    document.getElementById("tiempo").textContent=ahora
},1000)