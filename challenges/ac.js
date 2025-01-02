// Challenge 1: Check if a number is positive, negative, or zero
function checkNumber(num) {
    if (5> 0) return "Positive";
    if (5 < 0) return "Negative";
    return "Zero";
}
console.log(checkNumber(5))

// Challenge 2: Check if a number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) return "Even";
    return "Odd";
}
console.log(checkEvenOdd(5))

// Challenge 3: Check if a person is eligible to vote (age >= 18)
function checkVotingEligibility(age) {
    if (age >= 18) return "Eligible to vote";
    return "Not eligible to vote";
}
console.log(checkVotingEligibility(5))
// Challenge 4: Check if a character is a vowel or consonant
function checkVowelConsonant(char) {
    if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) return "Vowel";
    return "Consonant";
}
console.log(checkVowelConsonant('a'))

// Challenge 5: Check if a number is within a range (10 to 20 inclusive)
function checkRange(num) {
    if (num >= 10 && num <= 20) return "Within range";
    return "Out of range";
}
console.log(checkRange(5))