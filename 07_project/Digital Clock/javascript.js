const clock = document.getElementById('clock');

setInterval(function(){//setInterval( function(){ function defination} , interval(in miliseconds)) it alllows us to exexute the a particular function or a code at a intervals , mention in the function.
    const date = new Date();
    clock.textContent=date.toLocaleTimeString();
},1000)