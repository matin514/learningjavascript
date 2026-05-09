# Functions Basics - Exercise

**Topic:** Functions and Test Data Generator
**Difficulty:** ⭐⭐ Intermediate

---

## 🎯 Learning Goals

- Create functions
- Use parameters
- Return values
- Build reusable test data generators

---
S
## 📋 Exercises

### Part 1: Basic Functions

Create `basic-functions.js` with these functions:

```javascript
// Function to generate email
function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
}

// Function to generate username
function generateUsername(firstName, lastName) {
    return firstName.toLowerCase() + lastName.toLowerCase();
}

// Function to generate password
function generatePassword(prefix) {
    return prefix + "@123";
}

// Test the functions
let email = generateEmail("John", "Doe");
let username = generateUsername("John", "Doe");
let password = generatePassword("Test");

console.log(email);
console.log(username);
console.log(password);
```

---

### Part 2: Test Data Generator

Create `test-data-generator.js` with a complete user generator:

```javascript
function generateTestUser(firstName, lastName) {
    return {
        name: `${firstName} ${lastName}`,
        email: generateEmail(firstName, lastName),
        username: generateUsername(firstName, lastName),
        password: "Test@123",
        userId: 1000,
        isActive: true
    };
}

// Use helper functions from Part 1
let user1 = generateTestUser("John", "Doe");
let user2 = generateTestUser("Jane", "Smith");

console.log(user1);
console.log(user2);
```

---

### Part 3: Test Validator Function

Create `email-validator.js`:

```javascript
function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return "VALID";
    } else {
        return "INVALID";
    }
}

// Test it
console.log(validateEmail("test@example.com"));  // VALID
console.log(validateEmail("notanemail"));         // INVALID
```

---

## ✅ Self-Check

- [ ] Created 3+ functions
- [ ] Used parameters correctly
- [ ] Returned values from functions
- [ ] Built complete test user generator
- [ ] All files run without errors
---

## 🤔 Reflection Questions

After completing the exercise, think about:
1. How do functions make your code more maintainable?
2. When would you use parameters vs hardcoded values?
3. How could you extend this test data generator?
4. What other test data could you generate with functions?

---

## 🆘 Need Help?

**Common Issues:**

**Q: Return value is undefined**
A: Make sure you use `return`:
```javascript
// ✗ Wrong
function add(a, b) {
    a + b;  // Missing return!
}

// ✓ Correct
function add(a, b) {
    return a + b;  // Returns the value
}
```

**Q: Parameters not working**
A: Check that you're passing arguments when calling:
```javascript
// ✗ Wrong
function greet(name) {
    console.log("Hello " + name);
}
greet();  // name will be undefined!

// ✓ Correct
greet("John");  // Passes "John" as name parameter
```