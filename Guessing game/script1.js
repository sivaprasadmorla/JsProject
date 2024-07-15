const randomNumber = Math.floor(Math.random()*20);
console.log(randomNumber);
attempts=0

function check(){
    const userGuess = parseInt(document.getElementById("inputNumber").value);
    const resultDisplay = document.getElementById("display");
    const title = document.getElementById("title");
    const button1 = document.getElementById("button1");

    // document.getElementById(inputNumber).style.display="none";
    button1.style.display="none";
    title.style.display="none";


    if (userGuess < 1 || userGuess > 20) {
        document.body.style.backgroundColor="#EFBC9B";
        resultDisplay.textContent = "Please enter a valid number between 1 and 20.";
        resultDisplay.style.color = "white"; // For example, set the text color to red
        resultDisplay.style.fontWeight = "bold";
        
        recheck.style.display="none";
        replay.style.display="inline-block";
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        document.body.style.backgroundColor="#E5E483";
        resultDisplay.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
        resultDisplay.style.color = "white"; // For example, set the text color to red
        resultDisplay.style.fontWeight = "bold";
        resultDisplay.style.padding="20px";
        document.getElementById("inputNumber").style.display="None";
        document.getElementById("inputNumber").style.paddingLeft=`20px`;
        recheck.style.display="none";
        replay.style.display="inline-block";
        
    } else if (userGuess < randomNumber) {
        document.body.style.backgroundColor="#BE7B72";
        resultDisplay.textContent = "Too low! Try a higher number. Enter the Number in the field";
        resultDisplay.style.color = "white"; // For example, set the text color to red
        resultDisplay.style.fontWeight = "bold";
        resultDisplay.style.padding="20px";
        document.getElementById("inputNumber").value=" ";
        recheck.style.display="inline-block";


    } else {
        document.body.style.backgroundColor="#BE7B72";
        resultDisplay.textContent = "Too high! Try a lower number.Enter the number in the field";
        resultDisplay.style.color = "white"; // For example, set the text color to red
        resultDisplay.style.fontWeight = "bold";
        resultDisplay.style.padding="20px";
        document.getElementById("inputNumber").value=" ";
        recheck.style.display="inline-block";
    }
    
    
}
function reloadPage() {
    location.reload();
}
