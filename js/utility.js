function hideElementById(e){
    const element = document.getElementById(e)

    element.classList.add('hidden')
}
function showElementById(e){
    const element = document.getElementById(e)

    element.classList.remove('hidden')
}

function setColor(e){
    const element = document.getElementById(e)

    element.classList.add('bg-red-400')
}

function getTextValue(elementId){
    let element = document.getElementById(elementId);
    let newElement = element.innerText;
    let value = parseInt(newElement)
    return value;
}

function setValue(elementId, val){
    let element = document.getElementById(elementId)
    element.innerText = val;
}

function romoveBgColor(e){
    let element = document.getElementById(e)
    element.classList.remove('bg-red-400')
}

function getARandomAlphabet(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetsArr = alphabets.split('')
    const randomNumber = Math.round(Math.random()*25)

    const uniqueAlphabet =  (alphabetsArr[randomNumber])

    return uniqueAlphabet;
}
