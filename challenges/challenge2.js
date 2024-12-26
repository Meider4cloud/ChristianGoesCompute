/*
2. Print a table containing multiplication tables

Let’s start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers 
to the multiplication tables from 1 through 10?

Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

*/

const maxMultiplier = 20



const multiply = (multiplier) => {

    let row = []

    for (let i = 1; i <= 10; i++) {
        row.push(multiplier * i)
    }
    row = `Multiply with ${multiplier}: ${row}`
    return row
}


const createTable = (highestMultiplier, single) => {
    var table = []
    for(let multiplier = 0; multiplier <= highestMultiplier; multiplier++) {
        table.push(multiply(multiplier))
    }
    return table
}


console.log(createTable(maxMultiplier, true));