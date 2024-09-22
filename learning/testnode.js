var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const envNumbers = (array) => {
    var output = []
    array.forEach(number => {
        if (number % 2 === 0) {
            output.push(number)
        }
    });
    return output
}


console.log(envNumbers(array));