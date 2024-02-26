// function playNow(){
//     const homeSection = document.getElementById('home')
//     homeSection.classList.add('hidden')
//     const playGround = document.getElementById('playGround')
//     playGround.classList.remove('hidden')
// }

function playNow(){
    hideElementById('home')
    showElementById('playGround')
    continueGame()
}



function continueGame(){
    const alphabet = getARandomAlphabet()
    document.getElementById('showAphtbet').innerText = alphabet;
    setColor(alphabet)
}

let updateGlobalValue =0;
function keyboardPress(e){
    let playerPressed = e.key.toLowerCase()
    let currentAlphabet = document.getElementById('showAphtbet').innerText.toLowerCase()
    if(playerPressed=== currentAlphabet){
        continueGame()
        romoveBgColor(currentAlphabet)
        // score
        let score = getTextValue('score')
        let updateScore = score+1;
        setValue('score',updateScore)
        updateGlobalValue = updateScore

        // .....................................................
        // let score = document.getElementById('score')
        // let currentScore = parseInt(score.innerText);
        // score.innerText = currentScore+1;
        // .....................................................
    }else{
        let life = document.getElementById('life')
        let currentLife = parseInt(life.innerText)-1;
        if(currentLife>0){
            setValue('life',currentLife)
            
        }else{
            gameOver()
            setValue('finalScore', updateGlobalValue)
        }
    }
}
document.addEventListener('keyup',keyboardPress)

function playAgain(){
    continueGame()
    showElementById('playGround')
    hideElementById('lastPart')
    setValue('life',3)
    setValue('score',0)
   
   
}