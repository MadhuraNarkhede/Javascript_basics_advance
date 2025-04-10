const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach( function(button){
    console.log(button)
    button.addEventListener('click',function(e){//addEventListner :- It allows us to add the event that we would like to select along with a function which tell us what we would like to do after doing that event.
        console.log(e);//ie is the event object.
        console.log(e.target);//e.target allows us to know that on which attribute the eveny has occured.
        switch (e.target.id)
        {
            case "grey":
                body.style.backgroundColor=e.target.id;
                break;

                case "white":
                    body.style.backgroundColor=e.target.id;
                    break;

                    case "blue" :
                        body.style.backgroundColor=e.target.id;
                        break

                        case "yellow" :
                            body.style.backgroundColor=e.target.id;
                            break;

                
            default :
            console.log("No colour is present");
            
            
            

        }
    });
});

