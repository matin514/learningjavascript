# Data Types - Exercise

**Topic:** Data Types (String, Number, Boolean)
---

## 🎯 Learning Goals

- Work with different data types
- Use strings for text data
- Use numbers for numeric data
- Use booleans for true/false values
- Check types with typeof

---

## 📋 Exercises

### Part 1: Test User Profile with Mixed Types

Create `user-profile-datatypes.js` with a complete user profile using all data types.

**Requirements:**
```javascript
let firstName = "John";              // String
let lastName = "Doe";                // String
let userId = 1001;                   // Number
let age = 28;                        // Number
let email = "john.doe@test.com";     // String
let isActive = true;                 // Boolean
let loginCount = 15;                 // Number
let averageScore = 87.5;             // Number
let hasAccess = true;                // Boolean
```

Print formatted output with all data.

---

### Part 2: Test Metrics Dashboard

Create `test-metrics-dashboard.js` showing test execution metrics.

**Use these data types:**
- Total tests (number)
- Passed tests (number)
- Failed tests (number)
- Pass rate (number with decimal)
- Test suite name (string)
- All tests passed? (boolean)

---

### Part 3: Type Checking

Create `type-checking-demo.js` using typeof for all variables.

---

### Part 4: BigInt — Large Number Precision

Create `bigint-demo.js` to explore the limit of regular `Number` and how `BigInt` fixes it.

**Requirements:**
1. Store `Number.MAX_SAFE_INTEGER` and print it
2. Add `1`, `2`, and `3` to it — observe where the result stops changing
3. Repeat using BigInt equivalent (`9007199254740991n`)
4. Print `typeof` a BigInt value
5. Demonstrate that mixing BigInt and Number throws an error (use try/catch)

**Test Cases:**
```javascript
// What does this print?
let max = Number.MAX_SAFE_INTEGER;
console.log(max + 1);  // ?
console.log(max + 2);  // ?
console.log(max + 3);  // ?

// Fix with BigInt
let bigMax = 9007199254740991n;
console.log(bigMax + 1n);  // ?
console.log(bigMax + 2n);  // ?
console.log(bigMax + 3n);  // ?
```

---

### Part 5: Symbol — Unique Identifiers

Create `symbol-demo.js` to explore Symbol uniqueness.

**Requirements:**
1. Create two Symbols with the same description `"testId"`
2. Compare them with `===` — print the result
3. Print `typeof` each Symbol
4. Print `.description` of each Symbol
5. **Bonus:** Use two Symbols as keys on the same object and verify they don't overwrite each other

**Test Cases:**
```javascript
let sym1 = Symbol("testId");
let sym2 = Symbol("testId");

console.log(sym1 === sym2);       // What do you expect?
console.log(typeof sym1);         // What type is it?
console.log(sym1.description);    // What prints here?
```

---

## ✅ Self-Check

- [ ] Used strings, numbers, and booleans
- [ ] Numbers don't have quotes
- [ ] Booleans are true/false (no quotes)
- [ ] Used typeof correctly
- [ ] Demonstrated BigInt precision vs regular Number
- [ ] Showed that two Symbols with the same label are not equal
- [ ] All files run without errors

---

## 🤔 Reflection Questions

After completing the exercise, think about:
1. When would you use each data type in testing?
2. Why is it important to use the correct data type?
3. What happens if you put quotes around a number?
4. How can typeof help debug your code?

---

## 🆘 Need Help?

**Common Issues:**

**Q: My number is printing with quotes around it**
A: Remove the quotes - numbers don't need them:
```javascript
// ✗ Wrong
let age = "28";  // This is a string!

// ✓ Correct
let age = 28;    // This is a number
```

**Q: Boolean shows as a string**
A: Don't use quotes with true/false:
```javascript
// ✗ Wrong
let isActive = "true";  // This is a string!

// ✓ Correct
let isActive = true;    // This is a boolean
```

**Q: typeof shows "string" for everything**
A: Check that you're not putting quotes around numbers and booleans