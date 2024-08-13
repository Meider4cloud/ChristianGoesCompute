// ## 3. Create a length converter function

// Creating a function is a skill that’ll be useful in many settings, and as you progress, you’ll be working on much more complicated functions than this one. But a function that converts units of measure can be pretty handy in multiple professions and industries.

// Let’s start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.

let inputInKilometers = 50

const convertFactor = 1.60934

inputInKilometers = "fifty"

const converToMiles = (inputInKilometers) => {
    return inputInKilometers / convertFactor
}
const result = converToMiles(inputInKilometers)
console.log(`Output is ${result} `)