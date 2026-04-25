# Comparison & Logical Operators - Exercise

**Topic:** Operators - Building Complex Conditions
**File to Create:** `comparison-logical-operators.js`

---

## Learning Goals

By completing this exercise, you will:
- ✅ Practice comparison operators (>, <, >=, <=, ===, !==)
- ✅ Use logical AND (&&) operator
- ✅ Use logical OR (||) operator
- ✅ Use logical NOT (!) operator
- ✅ Combine multiple conditions
- ✅ Build complex validation logic

---

## Setup

1. Open VSCode
2. Create a new file: `comparison-logical-operators.js`
3. Save it in your `js-automation-training` folder
4. Test your code by running: `node comparison-logical-operators.js`

---

## Exercise 1: Age Range Validation

**Scenario:** Validate that a user's age is within the acceptable range for test automation training (18-65).

**Requirements:**
1. Create a variable `age` with value `25`
2. Write an if-else statement that:
   - Checks if age is >= 18 AND <= 65
   - If yes, print: `"✅ Valid age range (18-65)"`
   - If no, print: `"❌ Age must be between 18 and 65"`

**Test Cases:**
Try running your code with these values:
- `18` → Valid (boundary)
- `17` → Invalid (too young)
- `65` → Valid (boundary)
- `66` → Invalid (too old)
- `25` → Valid (in range)

**Example Output:**
```
Age: 25
✅ Valid age range (18-65)
```

---

## Exercise 2: Login Credentials Validator

**Scenario:** A user can login with EITHER (username AND password) OR email.

**Requirements:**
1. Create three variables:
   - `username` with value `"testuser"`
   - `password` with value `"Test@123"`
   - `email` with value `""`
2. Write an if-else statement that:
   - Checks if (username is NOT empty AND password is NOT empty) OR email is NOT empty
   - If yes, print: `"✅ Sufficient login credentials"`
   - If no, print: `"❌ Insufficient credentials - provide username+password OR email"`

**Hint:** Use parentheses to group the AND condition:
```javascript
if ((condition1 && condition2) || condition3) {
```

**Test Cases:**
- `username="testuser"`, `password="Test@123"`, `email=""` → Valid
- `username="testuser"`, `password=""`, `email=""` → Invalid
- `username=""`, `password=""`, `email="test@example.com"` → Valid

**Example Output:**
```
Checking credentials...
Username: testuser
Password: ******** (8 characters)
Email: (empty)

✅ Sufficient login credentials
```

---

## Exercise 3: Test Status Validator

**Scenario:** A test is considered successful if status is "PASSED" OR "SKIPPED", AND there are no errors.

**Requirements:**
1. Create two variables:
   - `status` with value `"PASSED"`
   - `errorCount` with value `0`
2. Write an if-else statement that:
   - Checks if (status is "PASSED" OR "SKIPPED") AND errorCount equals 0
   - If yes, print: `"✅ Test completed successfully"`
   - If no, print: `"❌ Test has issues"`

**Test Cases:**
- `status="PASSED"`, `errorCount=0` → Success
- `status="SKIPPED"`, `errorCount=0` → Success
- `status="PASSED"`, `errorCount=2` → Issues
- `status="FAILED"`, `errorCount=0` → Issues

**Example Output:**
```
Test Status: PASSED
Error Count: 0

Validation:
  Status is acceptable: true
  No errors: true

✅ Test completed successfully
```

---

## Exercise 4: Response Time Validator

**Scenario:** Performance test - response time must be less than 3 seconds.

**Requirements:**
1. Create a variable `responseTime` with value `2.5`
2. Write an if-else statement that:
   - Checks if responseTime < 3
   - If yes, print: `"✅ Performance test PASSED (response time: X seconds)"`
   - If no, print: `"❌ Performance test FAILED (response time: X seconds, threshold: 3 seconds)"`

**Test Cases:**
- `2.5` → PASSED
- `3.0` → FAILED (not less than 3)
- `2.999` → PASSED
- `3.5` → FAILED

**Example Output:**
```
Response Time Test
Threshold: 3 seconds
Actual: 2.5 seconds

✅ Performance test PASSED (response time: 2.5 seconds)
```

---

## Additional Challenges

### Challenge: Complete Test User Validator

**Scenario:** Complete test user validator with multiple validation rules.

**Requirements:**
Create a function that validates all of these conditions:
1. Username is NOT empty AND length is between 3-20 characters
2. Password is NOT empty AND length is at least 8 characters
3. Email is NOT empty AND contains both "@" and "."
4. Age is between 18 and 120

The function should return the FIRST error it finds, or success if all pass.

```javascript
function validateCompleteUser(username, password, email, age) {
    console.log("Validating test user...\n");

    // Your validation logic here
    // Check each condition and return appropriate message
    // Return FIRST error found, or success if all pass
}

// Test with valid user
let result = validateCompleteUser(
    "testuser",
    "Test@123",
    "test@example.com",
    25
);
console.log(result);

// Test with invalid user (short username)
result = validateCompleteUser(
    "ab",
    "Test@123",
    "test@example.com",
    25
);
console.log(result);
```

**Expected Output for Valid User:**
```
Validating test user...

Checking username... ✓
Checking password... ✓
Checking email... ✓
Checking age... ✓

✅ All validations passed - User is valid!
```

**Expected Output for Invalid User:**
```
Validating test user...

Checking username... ✗
❌ Username must be 3-20 characters (current: 2)
```
</details>

---

## Testing Your Code

**Run your file:**
```bash
node comparison-logical-operators.js
```

**You should see:**
- Output for all 4 exercises
- Clear validation messages
- Proper use of comparison and logical operators
- Correct handling of edge cases

---

## Common Mistakes to Avoid

**❌ Using = instead of ===**
```javascript
// Wrong - this assigns!
if (age = 18) {

// Correct - this compares!
if (age === 18) {
```

**❌ Confusing && with ||**
```javascript
// Wrong - checks if BOTH are empty (rare)
if (username === "" && password === "") {

// Usually you want - checks if EITHER is empty
if (username === "" || password === "") {
```

**❌ Forgetting parentheses with complex conditions**
```javascript
// Confusing
if (a && b || c) {

// Clear
if ((a && b) || c) {
```

**❌ Using > when you mean >=**
```javascript
// Wrong - 18 is not > 18, so fails!
if (age > 18) {

// Correct - 18 >= 18 is true
if (age >= 18) {
```

---

## Operator Quick Reference

**Comparison Operators:**
```
>   Greater than          (5 > 3 is true)
<   Less than             (3 < 5 is true)
>=  Greater or equal      (5 >= 5 is true)
<=  Less or equal         (5 <= 5 is true)
=== Equal to              (5 === 5 is true)
!== Not equal to          (5 !== 3 is true)
```

**Logical Operators:**
```
&&  AND - Both must be true
||  OR  - At least one must be true
!   NOT - Flip true to false, false to true
```

**Truth Tables:**
```
AND (&&)              OR (||)
T && T = T            T || T = T
T && F = F            T || F = T
F && T = F            F || T = T
F && F = F            F || F = F
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. ✅ Do I understand the difference between > and >=?
2. ✅ Do I know when to use && vs ||?
3. ✅ Can I explain what ! (NOT) does?
4. ✅ Did I use parentheses to group complex conditions?
5. ✅ Did I test edge cases (boundaries)?
6. ✅ Did I use === instead of = for comparisons?

---

## Reflection

**Think about:**
1. How do these operators relate to your test case conditions?
2. Where in your manual testing do you check ranges?
3. When do you check multiple conditions at once?
4. How would you automate your validation logic?

---

## Need Help?

**Debugging tips:**
- Use `console.log()` to check condition results
- Test one condition at a time
- Check your parentheses
- Verify you're using === not =

---

## Progress Check

**You can now:**
- ✅ Use all comparison operators
- ✅ Combine conditions with logical operators
- ✅ Build complex validation logic
- ✅ Validate ranges and multiple conditions
- ✅ Write realistic test automation checks
