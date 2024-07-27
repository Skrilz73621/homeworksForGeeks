const $months = document.querySelector('.months')
const winterButton = document.querySelector('.winter')
const springButton = document.querySelector('.spring')
const summerButton = document.querySelector('.summer')
const fallButton = document.querySelector('.fall')


winterButton.addEventListener('click', renderWinterMonths)

function renderWinterMonths(){
    $months.innerHTML = ''
    const december = winterMonths()
    december.innerHTML = 'Декабрь'
    const january = winterMonths()
    january.innerHTML = 'Январь'
    const february = winterMonths()
    february.innerHTML = 'Февраль'
    $months.append(december,january,february)
}

function winterMonths(){
    const winterMonth = document.createElement('button')
    winterMonth.classList.add('seasonButton')
    winterMonth.classList.add('winter')
    
    return winterMonth
}







springButton.addEventListener('click', renderSpringMonths)

function renderSpringMonths(){
    $months.innerHTML = ''
    const march = springMonths()
    march.innerHTML = 'Март'
    const april = springMonths()
    april.innerHTML = 'Апрель'
    const may = springMonths()
    may.innerHTML = 'Май'
    $months.append(march,april,may)
}

function springMonths(){
    const springMonth = document.createElement('button')
    springMonth.classList.add('seasonButton')
    springMonth.classList.add('spring')
    
    return springMonth
}





summerButton.addEventListener('click', renderSummerMonths)

function renderSummerMonths(){
    $months.innerHTML = ''
    const june = summerMonths()
    june.innerHTML = 'Июнь'
    const july = summerMonths()
    july.innerHTML = 'Июль'
    const august = summerMonths()
    august.innerHTML = 'Август'
    $months.append(june,july,august)
}

function summerMonths(){
    const summerMonths = document.createElement('button')
    summerMonths.classList.add('seasonButton')
    summerMonths.classList.add('summer')
    
    return summerMonths
}




fallButton.addEventListener('click', renderFallMonths)

function renderFallMonths(){
    $months.innerHTML = ''
    const september = fallMonths()
    september.innerHTML = 'Сентябрь'
    const october = fallMonths()
    october.innerHTML = 'Октябрь'
    const november = fallMonths()
    november.innerHTML = 'Ноябрь'
    $months.append(september,october,november)
}

function fallMonths(){
    const fallMonths = document.createElement('button')
    fallMonths.classList.add('seasonButton')
    fallMonths.classList.add('fall')
    
    return fallMonths
}

