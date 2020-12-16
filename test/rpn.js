function rpn (str) {
    const vals = breakString(str)

    let result = vals.shift();
    // let second = vals.shift();   
    
    // const bothAreNumbers = !isNaN(+first) && !isNaN(+second)

    // if (!bothAreNumbers) {
    //     throw new Error('oh no, bad number')
    // }

    // const operator = vals.shift()
    // let result = operate(first, second, operator);

    while (vals.length) {
        let next = vals.shift();
        if (isNaN(next)) {
            throw new Error('oh no, bad number')   
        } 
        let nextPlusOne = vals.shift();
        if (!isNaN(nextPlusOne) && !nextPlusOne) {
            throw new Error('oh no, bad operator')   
        }
        else {
            result = operate(result, next, nextPlusOne)
        }     
    }
   
    return result;
}

function breakString(str) {
    return str.split(' ')
}

function operate(first, second, operator) {
    if (operator === '+') {
        return +first + +second
    } else if (operator === '-') {
        return +first - +second
    } else if (operator === '*') {
        return +first * +second
    } else if (operator === '^') {
        return (+first) ** (+second)
    } else if (operator === '/') {
        return +first / +second
    } else {
        throw new Error('oh no, bad operator')
    }
}

module.exports = { rpn, breakString, operate}