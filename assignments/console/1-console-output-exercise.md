**Topic:** Console Output and Test Messages

---

## Learning Goals

By completing this exercise, you will:
- Practice creating and running JavaScript files
- Master using `console.log()` to display text
- Apply JavaScript to testing scenarios
- Build confidence with syntax

---


### Part 1: Create Your Test Profile

Create a new file called `my-testing-profile.js` and write code to print your testing profile.

**Requirements:**
- Print your name
- Print your role (e.g., "Manual Tester")
- Print years of testing experience
- Print one testing tool you use
- Print why you're learning JavaScript

**Example Output:**
```
Name: Priya Sharma
Role: Manual Tester
Experience: 3 years
Favorite Tool: JIRA
Learning Goal: To automate repetitive test cases
```

**Hints:**
- Use `console.log("text")` for each line
- Each line is a separate console.log statement
- Remember quotes around text!

---

### Part 2: Design a Test Report

Create a new file called `test-report-formatter.js` and write code to print a test execution report for any application you've tested.

**Requirements:**
1. Print a test suite name (e.g., "Login Test Suite")
2. Print 5 different test cases with names
3. Each test should have a status: PASSED, FAILED, or SKIPPED
4. Use blank lines to make it readable
5. Print a summary at the end (e.g., "3 Passed, 2 Failed")

**Example Output:**
```
==========================================
        LOGIN TEST SUITE
==========================================

Test 1: Login with valid credentials
Status: PASSED

Test 2: Login with invalid password
Status: FAILED

Test 3: Login with empty username field
Status: FAILED

Test 4: Login with special characters in username
Status: PASSED

Test 5: Remember me checkbox functionality
Status: PASSED

==========================================
        TEST SUMMARY
==========================================
Total Tests: 5
Passed: 3
Failed: 2
==========================================
```

**Hints:**
- Use `console.log("")` for blank lines
- Use `console.log("==========")` for borders
- You can use any test cases from your real testing experience!

---

### Part 3: Create Test Data Display

Create a new file called `test-data-display.js` and write code to print test data you would use for testing.

**Requirements:**
- Print 3 different test users with their details
- Each user should have: username, email, and password
- Format it nicely so it's easy to read

**Example Output:**
```
TEST DATA SET
=============

User 1:
Username: testuser1
Email: testuser1@example.com
Password: Test@123

User 2:
Username: testuser2
Email: testuser2@example.com
Password: Test@456

User 3:
Username: testuser3
Email: testuser3@example.com
Password: Test@789

Test data generation complete!
```

**Hints:**
- Use blank lines between users for readability
- Be creative with your test data!
- Remember: this is just practice - these aren't real passwords

---

## ✅ Self-Check

Before submitting, verify:
- [ ] All three files run without errors
- [ ] Output is formatted nicely and easy to read
- [ ] You used `console.log()` correctly
- [ ] Text is inside quotes
- [ ] Files are saved in your `js-automation-training` folder


---

## Additional Challenges

### Challenge 1: Add Emojis
Make your output more visual with emojis:
```javascript
console.log("✓ Test PASSED");
console.log("✗ Test FAILED");
console.log("⏭ Test SKIPPED");
```

### Challenge 2: Create a Bug Report
Write code to print a detailed bug report:
- Bug ID
- Title
- Steps to reproduce (3-5 steps)
- Expected result
- Actual result
- Severity


## 📤 Submission

**How to submit:**
1. Make sure all files are in your `js-automation-training` folder
2. Test that all files run successfully
3. Submit according to instructor's instructions

---

## 🆘 Need Help?

**Common Issues:**

**Q: My code shows "Syntax Error"**
A: Check that all text is inside quotes and console.log has parentheses:
```javascript
// ✗ Wrong
console.log(Hello)

// ✓ Correct
console.log("Hello")
```

**Q: Nothing prints when I run my code**
A: Make sure you saved the file (Ctrl/Cmd + S) and are running the correct filename:
```bash
node my-testing-profile.js
```

**Q: I see "Cannot find module"**
A: Check that your terminal is in the right folder. Use `cd` to navigate to `js-automation-training`