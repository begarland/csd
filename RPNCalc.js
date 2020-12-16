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

