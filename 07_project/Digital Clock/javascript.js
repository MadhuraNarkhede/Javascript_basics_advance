const clock = document.getElementById('clock');

setInterval(function(){
    const date = new Date();
    clock.textContent=date.toLocaleTimeString();
},1000)