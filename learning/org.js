// function definition
function generateMultiplicationTable(size) {
    let table = [];

    // Fill the table with multiplication results
    for (let i = 1; i <= size; i++) {
        let row = [];
        for (let j = 1; j <= size; j++) {
            row.push(i * j);
        }
        table.push(row);
    }

    return table;
}

function printMultiplicationTable(table) {
    // Print the table to the console
    console.log('Multiplication Table:');
    table.forEach(row => {
        console.log(row.join('\t'));
    });
}

// Generate a 10x10 multiplication table
let size = 10;
let multiplicationTable = generateMultiplicationTable(size);
printMultiplicationTable(multiplicationTable);

// For a 12x12 table, you can change the size variable and re-run the functions
// size = 12;
// multiplicationTable = generateMultiplicationTable(size);
// printMultiplicationTable(multiplicationTable);


