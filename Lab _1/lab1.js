const body = document.querySelector('#bodyTag');
var repeatButton = body.getElementsByClassName('Repeat')[0]
var numOfPrints = 0; 

countdownLoop();    

function countdownLoop() {   
for(let counter = 0; counter < 6; counter++ )
    {    
     printPromise(25 - 5*counter , 1000*counter*5);
    }
    restartProcess(); 
}

function printPromise ( printNum,secWait) { 
    return new Promise ((resolve, reject) => {
        setTimeout( function() {
        resolve (printProcess(printNum))},
        secWait)
        }) ; 
    }
   
function printProcess(printNum){ 
    
    console.log(printNum)
    
    // Add a paragraph tag to the DOM 
    const para = document.createElement('p')
    para.appendChild(document.createTextNode(printNum))
    body.appendChild(para)
}

function restartProcess( )  { 
    return new Promise ((resolve, reject) => {
        setTimeout( function() {
        resolve ( restartButton() )},
        1000 * 25)
        }) ; 
    }

 function restartButton() { 
     // Adding a Repeat button 
     const para = document.createElement('p')
     para.appendChild(document.createTextNode("Do you want to print the numbers again????"))
     body.appendChild(para)

	const button = document.createElement('button')
    const ButtonText = 'Repeat number print'
    button.className = 'Repeat'
    button.appendChild(document.createTextNode(ButtonText))
    body.appendChild(button)
    
    repeatButton = body.getElementsByClassName('Repeat')[numOfPrints]
    repeatButton.addEventListener('click', buttonClicked)

 }

function buttonClicked(e ) {
   // You used this e.preventDefault to stop the screen refreshing. 
   // Any thing you have an event, put it in as the first line! 
    e.preventDefault(); 
    numOfPrints++;
    countdownLoop();    

}

