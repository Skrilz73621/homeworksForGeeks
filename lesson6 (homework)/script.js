const firstNumber = generateRandom(maxLimit = 10)
const secondNumber = generateRandom(maxLimit = 10)
const button = document.querySelector('button')
const userText = document.querySelector('input')
const question = document.querySelector('.question')
const verdict = document.querySelector('.result')
const result = firstNumber * secondNumber

question.innerHTML = `сколько будет ${firstNumber} на ${secondNumber}?`

button.addEventListener('click', ()=>{
    if(Number(userText.value) === result){
        verdict.innerHTML = 'Молодец'
    }else{
        verdict.innerHTML = 'Дебил'
    }

})

function generateRandom(maxLimit = 100) { 
    let rand = Math.random() * maxLimit; 
    rand = Math.floor(rand);
    return rand;
} 