// 📘 Lesson: Using the Math Module in TypeScript
// In this lesson, you'll learn:
// - what the built-in Math object is,
// - how to use common Math methods (abs, ceil, floor, round, pow, sqrt),
// - how to generate random numbers,
// - when and why you might use these methods.

// -------------------------
// 🎯 Why use the Math module?
// -------------------------
// The Math object provides properties and methods for mathematical constants and functions,
// so you don’t have to implement common math logic yourself.

console.log("\n-------------------------")
console.log("🎯 Math Module Overview")
console.log("-------------------------\n")

// The Math object is a global built-in object.
// You never instantiate it; you call its methods directly on Math.
console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045

// -------------------------
// ➗ Absolute Value: Math.abs()
// -------------------------
console.log("\n-------------------------")
console.log("➗ Absolute Value (abs)")
console.log("-------------------------\n")

const firstValue = Math.abs(-5)
console.log(`Absolute value of -5: ${firstValue}`) // 5

const secondValue = Math.abs(3.14)
console.log(`Absolute value of 3.14: ${secondValue}`) // 3.14

// -------------------------
// 🔼 Rounding Methods
// -------------------------
// - Math.ceil(): rounds up
// - Math.floor(): rounds down
// - Math.round(): rounds to nearest integer
console.log("\n-------------------------")
console.log("🔼 Rounding Methods")
console.log("-------------------------\n")

console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.8)) // 4
console.log(Math.round(4.5)) // 5
console.log(Math.round(4.4)) // 4

// -------------------------
// ✖️ Power and Root
// -------------------------
// - Math.pow(base, exponent)
// - Math.sqrt(value)
console.log("\n-------------------------")
console.log("✖️ Power and Root")
console.log("-------------------------\n")

console.log(Math.pow(2, 3)) // 8
console.log(Math.sqrt(16)) // 4

// what if we want to calculate 2^10?
const base = 2
const exponent = 10
const result = Math.pow(base, exponent)
console.log(`${base} raised to the power of ${exponent} is ${result}`)

// -------------------------
// 🔢 Min and Max
// -------------------------
// - Math.min(...values)
// - Math.max(...values)
console.log("\n-------------------------")
console.log("🔢 Min and Max")
console.log("-------------------------\n")

console.log(Math.min(10, 5, 20)) // 5
console.log(Math.max(10, 5, 20)) // 20

// -------------------------
// 🎲 Random Numbers
// -------------------------
// Math.random() returns a float between 0 (inclusive) and 1 (exclusive).
console.log("\n-------------------------")
console.log("🎲 Random Numbers")
console.log("-------------------------\n")

const r = Math.random()
console.log(`Random between 0 and 1: ${r}`)

console.log(`Random value: ${Math.random()}`)

// -----------------------------
// 🤔 Sign of Numbers
// -----------------------------

console.log("\n-------------------------")
console.log("🤔 Sign of Numbers")
console.log("-------------------------\n")

// Math.sign() returns the sign of a number.
// -1 for negative, 1 for positive, 0 for zero.

const valueA = -10
console.log(`Sign of ${valueA}: ${Math.sign(valueA)}`) // -1

const valueB = 10
console.log(`Sign of ${valueB}: ${Math.sign(valueB)}`) // 1

// -------------------------
// 🧠 Summary:
// -------------------------
// - Math is a global built-in object—no need to import or instantiate.
// - Use Math.abs(), ceil(), floor(), round() for absolute values and rounding.
// - Use Math.pow() and Math.sqrt() for exponents and square roots.
// - Use Math.min() and Math.max() to find extremal values.
// - Use Math.random() (plus scaling) to generate random numbers.

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Math: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.

//Zadanie 2.6
// Steps:
// 1. Create a variable called `number` and set it to -7.8
// 2. Use Math.abs() to get the absolute value and store it in `absoluteValue`
// 3. Use Math.round() to round the original number and store it in `roundedValue`
// 4. Print both values in the following format:
//    "Absolute value: X"
//    "Rounded value: Y"

const number = -7.8
const absoluteValue = Math.abs(number)
const roundedValue = Math.round(number)
console.log("Absolute value: " + absoluteValue)
console.log("Rounded value: " + roundedValue)

const liczbaLosowa = Math.floor(Math.random() * 7) // Losowa liczba całkowita od 0 do 6
const liczbaLosowa2 = Math.random() * 7
console.log("liczbaLosowaZzakresu0-6:", liczbaLosowa)

// -------------------------
export {}
