// 📘 Lesson: Classes in TypeScript
// In this lesson, you'll learn what classes are, how to create them, and how to use them to model real-world objects.

// -------------------------
// 🔒 Access Modifiers
// -------------------------
// `public` (default) - accessible everywhere
// `private` - accessible only inside the class
// `protected` - accessible inside the class and subclasses

console.log("\n-------------------------")
console.log("🔒 Access Modifiers - example 1")
console.log("-------------------------\n")

// only properties that are public can be accessed outside the class!

class Person {
    // Public property can be accessed from anywhere
    public name: string
    // when no access modifier is specified, it defaults to public
    // so this is also a public property
    nameWithoutModifier: string

    // Private property can only be accessed within the class
    private age: number
    // Protected property can be accessed in subclasses
    protected address: string

    constructor(name: string, age: number, address: string) {
        this.name = name
        this.nameWithoutModifier = name
        this.age = age
        this.address = address
    }
}

const person = new Person("Alice", 30, "123 Main St")
console.log(person.name) // Alice
console.log(person.nameWithoutModifier) // Alice
// person.age // Error: Property 'age' is private and only accessible within class 'Person'.
// person.address // Error: Property 'address' is protected and only accessible within class 'Person

console.log("\n-------------------------")
console.log("🔒 Access Modifiers - example 2")
console.log("-------------------------\n")

class User {
    // Public property can be accessed from anywhere
    private username: string

    // Private property can only be accessed within the class
    private password: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    // Public method to get the username
    public getUsername(): string {
        return this.username
    }

    public changeUsername(newUsername: string, password: string): void {
        if (this.checkPassword(password)) {
            this.username = newUsername
            console.log("Username updated successfully.")
        } else {
            console.log("Password is incorrect. Cannot change username.")
        }
    }

    // Public method to set a new password
    public setPassword(oldPassword: string, newPassword: string): void {
        if (this.checkPassword(oldPassword)) {
            this.password = newPassword
            console.log("Password updated successfully.")
        } else {
            console.log("Old password is incorrect.")
        }
    }

    // Private method to check password (not accessible outside)
    private checkPassword(input: string): boolean {
        return this.password === input
    }
}

const user = new User("john_doe", "securePassword123")
console.log(user.getUsername()) // john_doe
user.setPassword("securePassword123", "newSecurePassword456") // Password updated successfully.
// user.checkPassword("securePassword123") // Error: Property 'checkPassword' is private

// lets provide incorrect old password
user.setPassword("wrongPassword", "anotherSecurePassword") // Old password is incorrect!

// -------------------------
// 🧠 Summary:
// -------------------------
// - Access modifiers control visibility

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Access Modifiers: https://www.typescriptlang.org/docs/handbook/2/classes.html#public-private-and-protected-modifiers

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.


// Klasa - > calosc Fabryka Ludzi -> ona wytwarza Persony
// Konstruktor -> przekazuje zmienne, ktore sa "przuwiazane" do instancji klasy -> czyli 
// w naszym przykladzie do instancji ( instancjaKlasyPersonExample1, instancjaKlasyPersonExample2) z klasy PersonExample

// INSTANCJA -> to obiekt stworzony na podstawie klasy -> czyli w naszym przykladzie instancjaKlasyPersonExample1, instancjaKlasyPersonExample2
// czyli jezeli mowie, ze masz zrobic dodatkowe ziomka Pawla i obliczyc dla niego pensje, to musisz stworzyc nowa instancje klasy 
// czyli to new PersonExample("Pawel", 35, 9999)

class PersonExample {
    name: string
    age: number
    stawkaGodzinowa: number
    constructor(name: string, age: number, stawkaGodzinowa) {
        this.name = name
        this.age = age
        this.stawkaGodzinowa= stawkaGodzinowa
    }
    greet(): string {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
        return `Hello, my name is ${this.name} and I'm ${this.age} years old and my payment is ${this.stawkaGodzinowa * 168} złotych`
    }

    obliczWyplate(liczbaGodzin: number): number {
        const wynik = this.stawkaGodzinowa * liczbaGodzin
        return wynik
    
        
}

}

const instancjaKlasyPersonExample1 = new PersonExample("dab", 33, 95)
instancjaKlasyPersonExample1.greet()

const instancjaKlasyPersonExample2 = new PersonExample("klos", 40, 25)
instancjaKlasyPersonExample2.greet()
console.log(instancjaKlasyPersonExample2.greet())
instancjaKlasyPersonExample2.stawkaGodzinowa = 10000
console.log(instancjaKlasyPersonExample2.obliczWyplate(168))

let wyplata = instancjaKlasyPersonExample2.obliczWyplate(168)

wyplata = wyplata * 1.2

//console.log(personExample.onliczWyplate(124))


// -------------------------
export {}
