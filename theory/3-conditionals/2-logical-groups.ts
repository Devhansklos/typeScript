// 📘 Lesson: Logical Groups with AND (&&) and OR (||)
// In this lesson, you'll learn how to combine multiple conditions using logical operators.

// -------------------------
// 🤔 Why combine conditions?
// -------------------------
// Sometimes you need to check more than one thing:
// - "If it's raining AND cold"
// - "If it's weekend OR I'm on vacation"

// You can do that using:
// - `&&` – AND: all conditions must be true
// - `||` – OR: at least one condition must be true

// -------------------------
// ✅ AND operator (&&)
// -------------------------
// true && true → ✅ true
// true && false → ❌ false
// false && false → ❌ false

console.log("\n-------------------------")
console.log("✅ AND operator (&&)")
console.log("-------------------------\n")

let isRaining: boolean = true
let isCold: boolean = false

if (isRaining && isCold) {
    console.log("Wear a raincoat 🧥☔")
}

// Try changing isCold to false and see what happens

// -------------------------
// ✅ OR operator (||)
// -------------------------
// true || true → ✅ true
// true || false → ✅ true
// false || false → ❌ false

console.log("\n-------------------------")
console.log("✅ OR operator (||)")
console.log("-------------------------\n")

let isWeekend: boolean = false
let hasDayOff: boolean = true

if (isWeekend || hasDayOff) {
    console.log("Sleep in 😴")
}

// -------------------------
// ✅ Combining with NOT (!)
// -------------------------
// Use `!` to reverse a condition (true → false)

console.log("\n-------------------------")
console.log("❗ NOT operator (!)")
console.log("-------------------------\n")

let isWorkingDay: boolean = true

if (!isWorkingDay) {
    console.log("Relax – it's your day off! 🛋️")
}

// -------------------------
// ✅ Example with all
// -------------------------

console.log("\n-------------------------")
console.log("🔀 Combined logic")
console.log("-------------------------\n")

let isLoggedIn: boolean = true
let isAdmin: boolean = false

if (isLoggedIn && !isAdmin) {
    console.log("Welcome back, user! 👋")
}

// -------------------------
// 🧠 Summary:
// -------------------------
// - `&&` (AND) – all conditions must be true
// - `||` (OR) – at least one must be true
// - `!` (NOT) – reverses the value (true ↔ false)
// - You can combine these to build powerful logic

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Logical Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// • If...else statements: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// • Boolean Type: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.

//Zadanie 3.2
let isStudent: boolean = true
let hasDiscount: boolean = false
let age: number = 18
let canGetDiscount: boolean = (isStudent || hasDiscount) && age >= 16
if (canGetDiscount) {
    console.log("You can get a discount")
} else {
    console.log("You cannot get a discount")
}   



// -------------------------
export {}
