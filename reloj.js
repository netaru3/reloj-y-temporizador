 tiempo= new Date()
let i=0
setInterval(function() {let tiempo=new Date();let ahora=tiempo.toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
hour12: false});
    document.getElementById("tiempo").textContent=ahora
},1000)
