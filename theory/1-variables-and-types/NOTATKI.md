em # 📘 Notatki: Zmienne, Typy i Wnioskowanie Typów

## 🔡 Deklarowanie zmiennych

W TypeScript możesz deklarować zmienne używając `let` lub `const`:
- **`let`** - używane dla zmiennych, które mogą się zmieniać później
- **`const`** - używane dla zmiennych, które nie powinny się zmieniać po ustawieniu
- **`var`** - istnieje również, ale nie jest zalecane w nowoczesnym kodzie TypeScript

To pomaga zapobiegać przypadkowym zmianom ważnych wartości.

### Przykład:
```typescript
let name = "Alice" // name może się zmienić później
const birthYear = 1990 // birthYear jest stałe

name = "Alicja" // ✅ dozwolone z let
// birthYear = 1991 // ❌ Błąd: const nie może być zmienione
```

## 🔢 Podstawowe typy: number, string, boolean

TypeScript obsługuje podstawowe typy:
- **`number`** - liczby (całkowite i zmiennoprzecinkowe)
- **`string`** - ciągi znaków
- **`boolean`** - wartości logiczne (true/false)

### Przykład:
```typescript
let age: number = 33
let language: string = "TypeScript"
let isTester: boolean = true
```

## 🧠 Wnioskowanie typów (Type Inference)

TypeScript może automatycznie określić typ na podstawie przypisanej wartości. Nie musisz za każdym razem pisać `: string`, `: number` lub `: boolean`.

### Przykład:
```typescript
const city = "Warsaw"      // TypeScript wie, że to string
const score = 100          // TypeScript wie, że to number
const isReady = false      // TypeScript wie, że to boolean
```

### Dobre praktyki:
- ✅ Używaj wnioskowania typów, gdy typ jest oczywisty
- ✅ Używaj jawnych typów, gdy potrzebna jest większa przejrzystość lub bezpieczeństwo

## 🔄 Ponowne deklarowanie typów

Możesz zadeklarować zmienną bez wartości, ale z określonym typem:

```typescript
let userId: string
userId = "abc"  // ✅ OK
// userId = 123 // ❌ Błąd: nie można przypisać number do string
```

**Uwaga:** Dla stałych (`const`) musisz od razu przypisać wartość:
```typescript
// const userEmail: string // ❌ Błąd: const musi być zainicjalizowane
const userEmail: string = "test@example.com" // ✅ OK
```

## 📝 Typy stringów

String to sekwencja znaków. W TypeScript możesz używać różnych cudzysłowów:

### Rodzaje cudzysłowów:
- **Podwójne cudzysłowy** (`"..."`) - najczęściej używane
- **Pojedyncze cudzysłowy** (`'...'`) - pozwalają używać podwójnych cudzysłowów wewnątrz
- **Backticki** (`` `...` ``) - pozwalają na wieloliniowe stringi i interpolację

### Przykłady:
```typescript
const doubleQuote: string = "Podwójne cudzysłowy są popularne"
const singleQuote: string = 'Pojedyncze też są OK. Pozwalają użyć "podwójnych" wewnątrz'
const backtick: string = `Backticki pozwalają na wieloliniowe stringi i interpolację`

// Wieloliniowy string z interpolacją:
const multiLine: string = `To jest wieloliniowy string! 
Możesz pisać tekst na wielu liniach bez użycia \n.
Pozwala też na interpolację: ${greeting}`
```

## 📚 Podsumowanie

- **`let`** dla wartości zmiennych, **`const`** dla wartości stałych
- Podstawowe typy: `number`, `string`, `boolean`
- TypeScript często może odgadnąć typ za Ciebie (wnioskowanie)
- Możesz również deklarować typy ręcznie
- Stringi można zapisywać używając różnych cudzysłowów, backticki oferują dodatkowe możliwości

## 🔗 Przydatne linki

- [Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)
- [Let and Const](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations)
- [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
