function convertNumberToHex (value) {
    if (value == '10') {
        return 'A'
    } else if (value == '11'){
        return 'B'
    }else if (value == '12'){
        return 'C'
    }else if (value == '13'){
        return 'D'
    }else if (value == '14'){
        return 'E'
    }else if (value == '15'){
        return 'F'
    } else return value
}

function convertHexToNumber (value) {
    if (value == 'A') {
        return 10
    } else if (value == 'B'){
        return 11
    }else if (value == 'C'){
        return 12
    }else if (value == 'D'){
        return 13
    }else if (value == 'E'){
        return 14
    }else if (value == 'F'){
        return 15
    } else return value
}


function decimalParaBases(number, base) {
    let convertedNumber = []
    if (number < base) {
        convertedNumber.push(convertNumberToHex(number))
        return convertedNumber.reverse().join('')
    } else {
        while(true) {
            let element = number % base
            number = Math.floor(number/base)
            convertedNumber.push(convertNumberToHex(element))
            if (number < base) {
                element = number
                convertedNumber.push(convertNumberToHex(element))
                break
            }
        }
    }  
    return convertedNumber.reverse().join('')
}

function basesParaDecimal (number, base) {
    if (number === '') {
        return ''
    }
    let arrayNumber = number.split('')
    arrayNumber.reverse()
    let valor = parseInt(arrayNumber[i])
    for (var i = 0; i < arrayNumber.length; i++) {
        if (i == 0) {
            valor = parseInt(convertHexToNumber(arrayNumber[i]))
        } else {
            valor += parseInt(convertHexToNumber(arrayNumber[i])) * (base**i)
        }
    }
    return valor
}

/* console.log(decimalParaBases(1532, 2))
console.log(decimalParaBases(1532, 8))
console.log(decimalParaBases(1532, 16)) */

basesParaDecimal('', 2)
/* basesParaDecimal('00101010', 2)
basesParaDecimal('52', 8)
basesParaDecimal('2A', 16) */


function calculate (type) {
    const Decimal = document.querySelector('#decimal')
    const Binario = document.querySelector('#binario')
    const Octal = document.querySelector('#octal')
    const Hexadecimal = document.querySelector('#hexadecimal')

    if (type === 'decimal') {
        let numberDecimal = Decimal.value
        let numberBinario = decimalParaBases(numberDecimal, 2)
        Binario.value = numberBinario
        let numberOctal = decimalParaBases(numberDecimal, 8)
        Octal.value = numberOctal
        let numberHexadecimal = decimalParaBases(numberDecimal, 16)
        Hexadecimal.value = numberHexadecimal
    } 

    if (type === 'binario') {
        let numberBinario = Binario.value
        let numberDecimal = basesParaDecimal(`${numberBinario}`, 2)
        Decimal.value = numberDecimal
        let numberOctal = decimalParaBases(numberDecimal, 8)
        Octal.value = numberOctal
        let numberHexadecimal = decimalParaBases(numberDecimal, 16)
        Hexadecimal.value = numberHexadecimal
    }

    if (type === 'octal') {
        let numberOctal = Octal.value
        let numberDecimal = basesParaDecimal(`${numberOctal}`, 8)
        Decimal.value = numberDecimal
        let numberBinario = decimalParaBases(numberDecimal, 2)
        Binario.value = numberBinario
        let numberHexadecimal = decimalParaBases(numberDecimal, 16)
        Hexadecimal.value = numberHexadecimal
    }
    if (type === 'hexadecimal') {
        let numberHexadecimal = Hexadecimal.value
        let numberDecimal = basesParaDecimal(`${numberHexadecimal}`, 16)
        Decimal.value = numberDecimal
        let numberBinario = decimalParaBases(numberDecimal, 2)
        Binario.value = numberBinario
        let numberOctal = decimalParaBases(numberDecimal, 8)
        Octal.value = numberOctal
    }
} 
