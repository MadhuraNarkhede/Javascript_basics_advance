let randomNumber = parseInt((Math.random() *100)+1);
console.log(randomNumber);


const userInput= document.getElementById('userInput');
const submit = document.getElementById('submit');
const previousGuess = document.getElementById('previousGuess');
const remainigAttempt = document.getElementById('remainigAttempt');
const history=document.getElementsByClassName('history');
const HiorLow = document.getElementById('HiorLow');

const p = document.createElement('p');

let prevNum = [];
let remain = 0;

let passGame = true;

if(passGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateguess(guess);

    })
}




function validateguess(guess)
{//It allows us to check whether tbe given input is valid or not and display the alert message specifically.
   if(isNaN(guess))
    {
      alert("Please Enter the valid  Number.")
    }else if(guess<1)
    {
        alert("Please Enter the Number greater than 1")
    }else if(guess>100)
        {
            alert("Please Enter the Number less than 100")
        }
        else{
            prevNum.push(guess);
            if(remain > 10){
                displayGuess(guess);
                displayMessage(`Game Over . The Random Number is ${randomNumber}`);
                EndGame();
            }else{
                displayGuess(guess);
                checkguess(guess);
            }
        }

}

function checkguess(guess)
{//it allows us to check the comparison of random number and guess.
    if(guess === randomNumber){
        
        displayMessage(`♥ ♥ ♥ You Guessed the right Number . Congrats ♥ ♥ ♥`)
        EndGame()
       }else if(guess < randomNumber){
        displayMessage(`😭😭Number is TOO low😭😭`)
       }
        else if(guess > randomNumber){
            displayMessage(`😭😭Number is TOO High😭😭`)
}
}

function displayGuess(guess)
{//It allows us to set the history variable  records along with userinput.
    userInput.value="";
    previousGuess.innerHTML+=`${guess} ,`;
    remain++;
    remainigAttempt.innerHTML = `${10-remain} `


}

function displayMessage(message)
{//it allows us to display the message.
    HiorLow.innerHTML=`<span>${message}</span>`;
}

function EndGame()
{//It allows us to the Game once it is over.
    userInput.innerHTML = "";
    userInput.setAttribute("dsiabled", " ");

}

function StartGame()
{

}


 