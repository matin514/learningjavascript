# String  - Exercise

**Topic:** String concatenation and template literals
---

## 🎯 Learning Goals

- Concatenate strings with +
- Use template literals

---

## 📋 Exercises

### Part 1: Generate Test Emails

Create `email-generator.js` that generates emails from names.

**Requirements:**
```javascript
let firstName = "John";
let lastName = "Doe";

Generate emails for 3 different users.

---

### Part 2: Format Test Report

Create `formatted-test-report.js` with professionally formatted output using template literals.

**Example:**
```javascript
let testName = "Login Functionality";
let tester = "Priya";
let duration = 2.5;
let status = "PASSED";

console.log(`
========================================
Test: ${testName}
Tester: ${tester}
Duration: ${duration}s
Status: ${status}
========================================
`);
```