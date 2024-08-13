// ## 3. Create a length converter function

// Creating a function is a skill that’ll be useful in many settings, and as you progress, you’ll be working on much more complicated functions than this one. But a function that converts units of measure can be pretty handy in multiple professions and industries.

// Let’s start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.

// 1 mile == 1.60934 km

const input = 156

const convertFactor = 1.60934

const convertToKm = (miles) => {
    if(typeof(miles) == "number"){
        
        return miles * convertFactor
    }
}

const convertToMiles = (km) => {
    if(typeof(km) == "number"){
        
        return km / convertFactor
    }
}

console.log(`${input} miles are ${convertToKm(input)} km`)
console.log(`${input} km are ${convertToMiles(input)} miles`)
