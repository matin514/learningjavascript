# Conditional Logic - Exercise

**Topic:** Conditional Logic & Validation
**File to Create:** `conditional-validation.js`

---

## Learning Goals

By completing this exercise, you will:
- ✅ Practice if-else statements
- ✅ Use else if for multiple conditions
- ✅ Write validation logic for test scenarios
- ✅ Apply conditionals to real testing problems
- ✅ Use switch statements for fixed-value matching
- ✅ Group multiple cases with intentional fall-through
- ✅ Use switch with expressions (computed values, `switch(true)` for ranges)
- ✅ Know when to choose switch vs if-else-if vs ternary
- ✅ Build confidence with decision-making code

---

## Setup

1. Open VSCode
2. Create a new file: `conditional-validation.js`
3. Save it in your `js-automation-training` folder
4. Test your code by running: `node conditional-validation.js`

---

## Exercise 1: Email Validation

**Scenario:** Before running login tests, validate the test email address.

**Requirements:**
1. Create a variable `email` with value `"testuser@example.com"`
2. Write an if-else statement that:
   - Checks if email contains both `@` AND `.`
   - If yes, print: `"✅ Valid email format"`
   - If no, print: `"❌ Invalid email format"`

**Hint:** Use the `.includes()` method:
```javascript
email.includes("@")  // Returns true if email contains @
```

**Test Cases:**
- `"testuser@example.com"` → Valid
- `"notanemail"` → Invalid
- `"missing@domain"` → Invalid (no dot)

**Example Output:**
```
Testing email: testuser@example.com
✅ Valid email format
```

---

## Exercise 2: Test Result Categorizer

**Scenario:** Your test framework returns different status codes. You need to display appropriate messages.

**Requirements:**
1. Create a variable `testResult` with value `"PASSED"`
2. Write an if-else-if statement that handles:
   - `"PASSED"` → Print: `"✓ Test passed successfully"`
   - `"FAILED"` → Print: `"✗ Test failed - check logs"`
   - `"SKIPPED"` → Print: `"⊘ Test skipped"`
   - Anything else → Print: `"? Unknown test status"`

**Test Cases:**
Try running your code with each of these values:
- `"PASSED"`
- `"FAILED"`
- `"SKIPPED"`
- `"PENDING"`

**Example Output:**
```
Test Status: PASSED
✓ Test passed successfully
```

---

## Exercise 3: Password Strength Checker

**Scenario:** Validate password strength for test user creation.

**Requirements:**
1. Create a variable `password` with value `"Test@123"`
2. Write an if-else-if statement that checks password length:
   - Less than 6 characters → `"❌ Weak password - too short"`
   - Less than 10 characters → `"⚠️ Medium password strength"`
   - 10 or more characters → `"✅ Strong password"`

**Test Cases:**
- `"Test"` (4 chars) → Weak
- `"Test@123"` (8 chars) → Medium
- `"Test@12345"` (10 chars) → Strong

**Hint:** Use `.length` property:
```javascript
password.length  // Returns the number of characters
```

**Example Output:**
```
Password: Test@123
Length: 8 characters
⚠️ Medium password strength
```

---

## Exercise 4: Test Score Grading

**Scenario:** Convert test automation scores to letter grades.

**Requirements:**
1. Create a variable `score` with value `85`
2. Write an if-else-if statement that assigns grades:
   - 90 or above → `"Grade: A (Excellent)"`
   - 80-89 → `"Grade: B (Good)"`
   - 70-79 → `"Grade: C (Average)"`
   - 60-69 → `"Grade: D (Pass)"`
   - Below 60 → `"Grade: F (Fail)"`

**Test Cases:**
- `95` → A
- `85` → B
- `75` → C
- `65` → D
- `50` → F

**Important:** Pay attention to the ORDER of conditions! Most specific first.

**Example Output:**
```
Test Score: 85
Grade: B (Good)
```

---

## Exercise 5: Early Return Pattern

**Scenario:** Refactor a nested validation function to use guard clauses.

**Part A — Understand the nested version:**
```javascript
function checkTestData(result, duration) {
    if (result !== null) {
        if (duration >= 0) {
            if (duration <= 10) {
                return "Valid: " + result + " in " + duration + "s";
            } else {
                return "Error: Duration too long";
            }
        } else {
            return "Error: Negative duration";
        }
    } else {
        return "Error: No result";
    }
}
```

**Part B — Rewrite using early return (guard clauses):**
- Check each error condition first and return immediately
- The happy path should be the last line

**Test with:** `(null, 3)`, `("PASSED", -1)`, `("PASSED", 15)`, `("PASSED", 2)`

**Expected Output (same for both versions):**
```
Error: No result
Error: Negative duration
Error: Duration too long
Valid: PASSED in 2s
```

---

## Exercise 6: Switch — Basic Value Matching

**Scenario:** Exercise 2 used if-else-if to handle test results. Rewrite it using `switch` and notice how much cleaner it reads when matching one variable against several fixed values.

**Requirements:**
1. Create a variable `testResult` with value `"FAILED"`
2. Use a `switch` statement to print:
   - `"PASSED"` → `"✓ Test passed successfully"`
   - `"FAILED"` → `"✗ Test failed - check logs"`
   - `"SKIPPED"` → `"⊘ Test skipped"`
   - `"PENDING"` → `"⏳ Test pending - not yet run"`
   - anything else → `"? Unknown test status"`

**Starter template:**
```javascript
let testResult = "FAILED";

switch (testResult) {
    case "PASSED":
        // your code
        break;
    // add remaining cases
}
```

**Test with:** `"PASSED"`, `"FAILED"`, `"SKIPPED"`, `"PENDING"`, `"UNKNOWN"`

**Tricky question:** What happens if you remove all the `break` statements? Predict before trying.

---

## Exercise 7: Switch — Grouping Cases (Multiple Cases, One Outcome)

**Scenario:** Map HTTP status codes to categories. Some codes share the same message — use fall-through to group them.

**Requirements:**

```javascript
let statusCode = 401;

switch (statusCode) {
    case 200:
        // "✅ 200 OK — request successful"
        break;
    case 201:
        // "✅ 201 Created — resource created"
        break;
    case 400:
    case 401:
    case 403:
        // Group these: "❌ Client error — check your request"
        // (400, 401, and 403 all print the same message — intentional fall-through)
        break;
    case 404:
        // "❌ 404 Not Found — endpoint does not exist"
        break;
    case 500:
    case 502:
    case 503:
        // Group these: "🔥 Server error — backend issue"
        break;
    default:
        // "? Unknown status code: " + statusCode
}
```

**Test with:** `200`, `201`, `400`, `401`, `403`, `404`, `500`, `502`, `503`, `418`

**Key concept:** When multiple `case` labels appear with no `break` between them, they all fall through to the same block. This is the **only** intentional use of fall-through.

---

## Exercise 8: Switch with Expressions

`switch` compares using `===`. So you can switch on **any expression** that produces a value — not just a plain variable.

### 8a: Switch on a computed value (grade buckets)

Instead of `if (score >= 90)` chains, compute the "tens digit" and switch on that:

```javascript
let score = 85;

// Math.floor(85 / 10) = 8  → maps to grade B
switch (Math.floor(score / 10)) {
    case 10:
    case 9:
        console.log("Grade: A (Excellent)");
        break;
    case 8:
        console.log("Grade: B (Good)");
        break;
    case 7:
        console.log("Grade: C (Average)");
        break;
    case 6:
        console.log("Grade: D (Pass)");
        break;
    default:
        console.log("Grade: F (Fail)");
}
```

**Test with scores:** `100`, `95`, `85`, `75`, `65`, `55`

**Why `case 10` and `case 9` are grouped:** A score of 100 gives `Math.floor(100/10) = 10`, so it needs its own case that falls through to the grade A block.

### 8b: Switch on `true` — range matching with expressions

When you need range checks but want switch style, switch on the literal `true` and put the condition in each `case`:

```javascript
let duration = 3.5;  // test duration in seconds

switch (true) {
    case duration < 1:
        console.log("⚡ Very fast test");
        break;
    case duration < 3:
        console.log("✅ Fast test");
        break;
    case duration < 6:
        console.log("⚠️ Acceptable — consider optimising");
        break;
    default:
        console.log("🐢 Slow test — needs attention");
}
```

**Test with durations:** `0.5`, `2`, `4`, `8`

**Note:** `switch(true)` works because each `case` expression evaluates to `true` or `false`. The first `case` that equals `true` wins. Use this sparingly — if-else-if is often clearer for ranges.

### 8c: Tricky questions — predict the output before running

**Snippet A — what prints?**
```javascript
let priority = "high";

switch (priority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}
```
What does this show? Why? (Hint: `switch` uses `===`)

**Snippet B — what prints?**
```javascript
let x = 2;

switch (x) {
    case 1:
        console.log("one");
    case 2:
        console.log("two");
    case 3:
        console.log("three");
    default:
        console.log("other");
}
```
What does this show? Why? How do you fix it to print only `"two"`?

**Snippet C — switch vs if-else, which should you choose?**

| Situation | Better choice |
|---|---|
| Matching one variable against 5+ fixed string/number values | `switch` |
| Checking ranges (`score >= 80`) | `if-else-if` |
| Multiple conditions combined with `&&` or `||` | `if-else-if` |
| Grouping several values with the same outcome | `switch` (fall-through) |
| Just two outcomes | ternary or `if-else` |

---

## Additional Challenges

### Challenge: Complete Test User Validation

**Scenario:** Complete test user validation before creating test data.

**Requirements:**
Create a validation function that checks:
1. Username is not empty
2. Password is not empty
3. Password is at least 8 characters
4. Email contains `@` and `.`

```javascript
function validateTestUser(username, password, email) {
    console.log("Validating test user data...\n");

    // Write your if-else-if logic here
    // Check each condition and return appropriate message
}

// Test it
let result = validateTestUser("testuser", "Test@123", "test@example.com");
console.log(result);
```

**Expected Output:**
```
Validating test user data...

Username: testuser ✓
Password: Test@123 ✓
Email: test@example.com ✓

✅ All validations passed - User data ready!
```

**If validation fails:**
```
Validating test user data...

❌ Error: Password must be at least 8 characters
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. ✅ Did all four exercises run without errors?
2. ✅ Did I test each exercise with different values?
3. ✅ Do I understand when to use `if` vs `else if` vs `else`?
4. ✅ Did I use `===` for comparisons (not `=`)?
5. ✅ Did I put my conditions in the right order?
6. ✅ Can I explain why each condition is checked?

---

## Reflection

**Think about:**
1. How is this similar to manual test case logic?
2. Where could you use if-else in your current testing work?
3. What validation logic do you write in test cases?
4. How would you automate that validation with if-else?

---

## Progress Check

**You can now:**
- ✅ Write if-else statements
- ✅ Handle multiple conditions with else if
- ✅ Create validation logic for testing
- ✅ Make decisions in your code
