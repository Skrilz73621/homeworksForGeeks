let submit = document.querySelector('#submitButton')
let resultText = document.querySelector('.result')
let verdictText = document.querySelector('.verdict')
submit.addEventListener('click', getN);

function getN() {
    let height = document.querySelector('#numHeight').value/100;
    let weight = document.querySelector('#numWeight').value;
    let result = weight/(height*height)

    verdicts = ['Недостаточно веса', 'Дефицит массы тела', 'Норма', 'Лишний вес',' Ожирение 1 степени','Ожирение 2 степени', 'Ожирение 3 степени']

    resultText.innerHTML = result

    if(result < 16){
        verdictText.innerHTML = verdicts[0]
    }else if(result >= 16 && result < 18.5){
        verdictText.innerHTML = verdicts[1]
    }else if(result >= 18.5 && result < 25){
        verdictText.innerHTML = verdicts[2]
    }else if(result >= 25 && result < 30){
        verdictText.innerHTML = verdicts[3]
    }else if(result >= 30 && result < 35){
        verdictText.innerHTML = verdicts[4]
    }else if(result >= 35 && result < 40){
        verdictText.innerHTML = verdicts[5]
    }else if(result >= 40){
        verdictText.innerHTML = verdicts[6]
    }
}