# Variables and Constants - Exercise

**Topic:** Variables and Constants
---

## 🎯 Learning Goals

By completing this exercise, you will:
- Practice creating variables with `let` and `const`
- Store test data in variables
- Use variables in console.log statements
- Understand when to use `let` vs `const`
- Build test data using variables

---

## 📋 Exercise Instructions

### Part 1: Test Environment Variables

Create a new file called `test-environment-config.js` and create variables for a test environment configuration.

**Requirements:**
- Use `const` for values that never change
- Use `let` for values that might change
- Create at least 6 variables
- Print them in a formatted way

**Variables to create:**
1. Application URL (constant)
2. Application name (constant)
3. Environment name (QA, Staging, Production)
4. Current tester name
5. Test execution date
6. Is automation enabled? (we'll use text for now)

**Example Output:**
```
==========================================
     TEST ENVIRONMENT CONFIGURATION
==========================================
App Name: MyShop E-commerce
App URL: https://qa.myshop.com
Environment: QA
Tester: Priya Sharma
Date: 2024-01-16
Automation Enabled: Yes
==========================================
```

**Hints:**
- `const APP_NAME = "MyShop E-commerce";`
- Use uppercase for constants that never going to change(common convention but not a MUST)
- `let currentTester = "Your Name";`

---

### Part 2: Test Data Generator

Create a new file called `test-user-generator.js` and create multiple test user credentials.

**Requirements:**
- Create 3 different test users
- Each user should have: firstName, lastName, email, password
- Use descriptive variable names (user1FirstName, user1Email, etc.)
- Print all users in a formatted table-like structure

**Example Output:**
```
========================================
         TEST USER DATABASE
========================================

USER 1:
--------
Name: John Doe
Email: john.doe@test.com
Password: JohnPass@123

USER 2:
--------
Name: Jane Smith
Email: jane.smith@test.com
Password: JanePass@456

USER 3:
--------
Name: Bob Johnson
Email: bob.johnson@test.com
Password: BobPass@789

========================================
Total Users: 3
========================================
```

**Hints:**
- Create variables: `let user1FirstName = "John";`
- Combine names: `console.log("Name: " + user1FirstName + " " + user1LastName);`
- Use blank console.log() for spacing

---

### Part 3: Test Flow Simulation

Create a new file called `test-execution-flow.js` and simulate a test execution flow where variable values change.

**Requirements:**
- Create a variable for test status
- Show how it changes during test execution
- Create variables for test details (test name, step number, etc.)
- Print the flow as it progresses

**Example Output:**
```
==========================================
      TEST EXECUTION FLOW
==========================================
Test Name: Login Functionality Test
Tester: Priya

Step 1: Opening browser
Status: IN PROGRESS

Step 2: Navigating to login page
Status: IN PROGRESS

Step 3: Entering credentials
Username: testuser@example.com
Status: IN PROGRESS

Step 4: Clicking login button
Status: IN PROGRESS

Step 5: Verifying dashboard
Status: COMPLETED

==========================================
Final Status: PASSED
Test Duration: 2.5 seconds
==========================================
```

**Hints:**
- Start with: `let testStatus = "IN PROGRESS";`
- Update status as you go: `testStatus = "COMPLETED";`
- Use `const` for testName (doesn't change)
- Use `let` for stepNumber (changes)

---

### Part 4: `var` — Hoisting and Scope Surprises

Create `var-problems.js` to observe exactly how `var` differs from `let`.

**Step 1 — Hoisting (read a variable before its declaration)**

Copy this code, predict what each `console.log` prints, then run it. First thinking is important
so once you see output you can understand better:

```javascript
console.log("Status before declaration: " + testStatus);
var testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);
```

Then replace `var` with `let` and run again. What changes?

**What to notice:** `var` is silently moved to the top of the function — JavaScript already "knows" about it, but the value is `undefined` until the assignment line. `let` instead crashes with "Cannot access before initialization", which is the safer behaviour.

---

**Step 2 — `var` leaks out of if-blocks**

Copy and run:

```javascript
if (true) {
    var tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // Does this crash or print?
```

Now replace `var` with `let` and run again. What happens to the last line?

**What to notice:** `var` ignores `{ }` boundaries — it leaks out. `let` stays inside the block.

---

**Step 3 — `var` in a for-loop leaks the counter**

Copy and run:

```javascript
for (var i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);   // What is i here?
```

Then replace `var i` with `let i` and run again. What happens to the last line?

**What to notice:** With `var`, the loop counter `i` is still accessible — and holds its final value — after the loop ends. With `let`, that line crashes.

---

**Step 4 — The fix: always use `let` or `const`**

Rewrite all three examples above using `let` (and `const` where the value never changes). Confirm each now behaves safely.

```
Key rule: In modern JavaScript always use let or const — never var.
You will still SEE var in older code, so it is important to understand
why it behaves differently, not just that it is old.
```

---

## ✅ Self-Check

Before submitting, verify:
- [ ] All four files run without errors
- [ ] Used `const` for values that don't change
- [ ] Used `let` for values that change
- [ ] Variable names are descriptive (not x, y, z)
- [ ] Output is formatted nicely
- [ ] No typos in variable names
- [ ] Can explain hoisting in one sentence
- [ ] Can explain why `var` leaks out of `if` and `for` blocks

---

## 🤔 Reflection Questions

After completing the exercise, think about:
1. When should you use `const` vs `let`?
2. How do variables make your code better than repeating values?
3. What variable naming conventions work best for test data?
4. In your own words, what does "hoisting" mean?
5. Why is `var` leaking out of blocks a potential source of bugs in test code?

---

## 📚 Key Takeaways

**Variables let you:**
- ✅ Store data for reuse
- ✅ Change values without rewriting code
- ✅ Make code readable and maintainable
- ✅ Represent test data in memory

**Best Practices:**
- Use `const` by default
- Use `let` when value changes
- Avoid `var` — it has two surprising behaviours:
  - **Hoisting:** declaration is moved to the top; reading it before the line gives `undefined` instead of an error
  - **No block scope:** leaks out of `if`, `for`, and any other `{ }` block
- Choose descriptive names
- Follow naming conventions

---

## 🆘 Need Help?

**Common Issues:**

**Q: "username is not defined"**
A: Make sure you declared it first:
```javascript
// ✗ Wrong
console.log(username);

// ✓ Correct
let username = "test";
console.log(username);
```

**Q: "Assignment to constant variable"**
A: You used `const` but tried to change it. Use `let` instead:
```javascript
// ✗ Wrong
const status = "started";
status = "completed";  // Error!

// ✓ Correct
let status = "started";
status = "completed";  // Works!
```

**Q: Variable prints "undefined"**
A: You declared but didn't assign a value:
```javascript
// ✗ Wrong
let email;
console.log(email);  // undefined

// ✓ Correct
let email = "test@example.com";
console.log(email);  // test@example.com
```