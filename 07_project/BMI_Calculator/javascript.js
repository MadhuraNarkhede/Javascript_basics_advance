const form = document.querySelector("form")
console.log(form);


form.addEventListener('submit', function(e)
{e.preventDefault();//it allows us to processing of data to server side and allows us the use the data in the current function.
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if(height === "" || height<0 || isNaN(height)){
        result.textContent=`Please enter the valid height. ${height} `;
        
    }else if(weight === "" || weight<0 || isNaN(weight)){
        result.textContent=`Please enter the valid weight. ${weight} `;
        
    }else{
        const bmi= (weight/((height*height)/10000)).toFixed(2);
//show the result.
        result.innerHTML=`<span>${bmi}</span>`;
    }

})
