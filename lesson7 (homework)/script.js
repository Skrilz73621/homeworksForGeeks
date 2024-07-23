const button = document.querySelector('button')
const numbers = document.querySelector('.numbers')
let reload = 0


button.addEventListener('click', renderNumber)

function renderNumber(){

    numbers.innerHTML = ''

    for(let i = 0; i<6; i++){
        const number = createNumber()
        number.innerHTML = generateRandom()
        numbers.append(number)
    }
}

function createNumber(){
    const $number = document.createElement('div')

    $number.borderRadius = '100%'
    $number.display = 'flex'
    $number.width = '120px'   
    $number.height = '120px'    
    $number.outline = '2px solid black'   
    $number.justifyContent = 'center'
    $number.alignItems = 'center'
    $number.backgroundColor = 'center'

    return $number
}

function generateRandom(maxLimit = 100) { 
    let rand = Math.random() * maxLimit; 
    rand = Math.floor(rand);
    return rand;
}