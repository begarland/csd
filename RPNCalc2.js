function RPNCalc (value) {
    var numbers = value.split(" ");

    if (numbers[2] === "+") {
        const first = Number(numbers[0])
        const second = Number(numbers[1])

        return first + second;

    } else {
        const first = Number(numbers[0])
        const second = Number(numbers[1])

        return first - second;
    }
}



function RPNCalc2 (value) {
    var numbers = value.split(" ");

    const symbolsArray = ["+", "-", "/", "*"]

    let newValue = 0;


    numbers.forEach((symbol, index) => {
       if(symbolsArray.includes(symbol)) {
        const first = numbers[index - 2] || 0;
        const second = numbers[index - 1] || 0;
        switch(symbol) {

            

            case "+": {
                newValue += first + second;
                break;
            }   
            case "-": {
                newValue -= first - second;
                break;
            }   
            case "*": {
                newValue = newValue * (first * second)
                break;
            }   
            case "/": {
                newValue = newValue / (first/second)
                break;
            }   
            default: 
                break;
             }
       }

       return newValue;
    });


}



// 2.5 3.1 + 4.9 - 10 +

// 4 * 6 - 10 + 8 / 2