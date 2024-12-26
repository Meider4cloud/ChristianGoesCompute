const array = [a, b, c]


const array2 = [a, [1, 2, 3], b, c]

const table = [[1, 2, 3, 4, ...], [2, 4, 6, ...], [3, 6, 9, ], [] ]

table.forEach(row => {
    row.join('\t')
})


table = [
 '1   2   3   4   5   6   7   8   9   10',
 '2 4 6 8 10 ...',
 ...
]

console.log(table);
