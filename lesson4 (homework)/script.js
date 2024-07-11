function hidePhone(phoneNumber){
    return `${phoneNumber.split('').slice(0, phoneNumber.length-2).join('')}xx`
}

function myReverse(string){
    let arr = []
    for(let i = string.length-1; i>= 0; i--){
        arr.push(string[i])
    }
    return arr.join('')
}
