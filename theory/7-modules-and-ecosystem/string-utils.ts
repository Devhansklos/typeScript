// 🔤 string-utils.ts
// This file contains string utility functions

export function capitalize(str: string): string {
    return str.split(" ").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(" ")
}

export function reverse(str: string): string {
    return str.split("").reverse().join("")
}

export function isPalindrome(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    return cleaned === cleaned.split("").reverse().join("")
}
