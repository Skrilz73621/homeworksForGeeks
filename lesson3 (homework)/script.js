
const number = +prompt('введите число от 2 до 10')
if(number > 1 && number < 10){
        for(let i = 1; i <= 10; i++){
            console.log(`${number} x ${i} = ${number * i}`)
        }

}else{
    console.warn('вы ввели не то число')
}


const points = [40, 55, 22, 89, 14, 78, 56, 47, 59]

for(let point of points){
    if(point < 20){
        console.log('ваша оценка 1')
    }else if(point >= 20 && point <40){
        console.log('ваша оценка 2')
    }else if(point >= 40 && point <60){
        console.log('ваша оценка 3')
    }else if(point >= 60 && point <80){
        console.log('ваша оценка 4')
    }else if(point >= 80 && point <100){
        console.log('ваша оценка 5')
    }
}
