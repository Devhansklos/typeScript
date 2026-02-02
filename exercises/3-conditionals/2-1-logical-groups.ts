// 🧪 Exercise 2.1: Logical groups
// This exercise will help you practice logical grouping with parentheses.

// -------------------------
// ✅ Exercise: Logical groups ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable `isStudent` and assign it the value true
// 2. Create a variable `hasDiscount` and assign it the value false
// 3. Create a variable `age` and assign it the value 18
// 4. Write a condition using parentheses: (isStudent || hasDiscount) && age >= 16
// 5. Store the result in a variable called `canGetDiscount`
// 6. Use an if-else statement to print the appropriate message

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


// 💭 Questions to think about:
// - What if age is 15 instead of 18?

// -------------------------
// 📤 Example Output:
// -------------------------
// "You can get a discount"
// -------------------------

// 👇 Your code here 👇 