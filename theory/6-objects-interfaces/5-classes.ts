// 📘 Lesson: Classes in TypeScript
// In this lesson, you'll learn what classes are, how to create them, and how to use them to model real-world objects.

// -------------------------
// 🧱 What is a Class?
// -------------------------
// A class is a blueprint for creating objects with shared properties and methods.
// It defines how the object will look and behave.

console.log("\n-------------------------")
console.log("🧱 Basic Class")
console.log("-------------------------\n")

// Imagine a class that represents a person
// It has properties like name and age, and methods to greet.
// Classes are defined using the `class` keyword.

class Person {
    name: string
    age: number
    Wyplata: number
    constructor(name: string, age: number, Wyplata: number) {
        this.name = name
        this.age = age
        this.Wyplata = Wyplata
    }

    greet(): void {
        console.log(`Hello, my name is  and I am years old.`)
    }

    countWyplataZPremia( Mnoznik: number) {
        console.log("Wyplata z premia: " + this.Wyplata * Mnoznik)
        return this.Wyplata * Mnoznik
    }

    countWyplataZPremiaBezKonstruktora ( Wyplata: number, Mnoznik: number) {
        console.log("Wyplata z premia: " + Wyplata * Mnoznik)
        return Wyplata * Mnoznik
    }

    // countWyplataZPremia(wyplata: number, Mnoznik: number) {
    //     console.log("Wyplata z premia: " + this.Wyplata * Mnoznik)
    //     return this.Wyplata * Mnoznik
    // }

    subtract(a: number, b: number): number {
        return a - b
    }
}

// Class is a blueprint! Just a definition.
// Now we can create instances (objects) of the Person class.
// Imagine in real life, you can create many people with different names and ages.

const alice = new Person("Jan", 28, 1000)
alice.greet() // Hello, my name is Alice and I am 28 years old.
alice.countWyplataZPremia(1.2)
alice.countWyplataZPremiaBezKonstruktora(1000, 1.2)

const bob = new Person("Bob", 30,  2000)
bob.greet() // Hello, my name is Bob and I am 32 years old.


Projek