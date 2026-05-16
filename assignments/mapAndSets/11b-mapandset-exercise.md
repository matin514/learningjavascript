# Set & Map Collections

**Topic:** Set (unique values), Map (key-value pairs), Iteration, Bulk Operations  
**File to Create:** `mapandset.js`

---

Arrays and plain objects cover most cases, but they have gaps. An array happily stores duplicates and requires a loop to check membership. A plain object only accepts string keys and has no reliable `.size`. Set and Map fill those gaps cleanly — and in test automation you'll reach for them more often than you might expect.

By the end of this exercise you'll be comfortable using all the key Set and Map methods, building Maps in bulk three different ways, combining Sets with union and intersection, and knowing exactly when each collection is the right tool.

---

## Setup

Create a new file called `mapandset.js` in your `js-automation-training` folder and run it with `node mapandset.js` as you go.

---

## Exercise 1: Track Unique Test Environments

A CI pipeline receives a list of environments to test against, but the list has duplicates because multiple config files got merged together. You need to deduplicate it and check membership efficiently.

1. Create a Set called `environments` and add these values one at a time:  
   `"staging"`, `"production"`, `"staging"`, `"uat"`, `"production"`, `"dev"`

2. Print the size of the Set — it should be 4, not 6.

3. Use `has()` to check whether `"staging"` and `"qa"` are in the Set and print the results.

4. Delete `"dev"` with `delete()`. Capture the return value and print it. Then try to delete `"qa"` (which was never added) and print that return value too.

5. Print the final Set and its size.

Expected output:
```
Size (with duplicates ignored): 4
Has 'staging': true
Has 'qa': false
delete('dev') returned: true
delete('qa') returned: false
Final environments: Set(3) { 'staging', 'production', 'uat' }
Final size: 3
```

---

## Exercise 2: Merge Test Suites (Union & Intersection)

You have two test groups. Some tests appear in both, and you need two things: a full combined run list without duplicates, and a list of tests that are shared between the two suites.

```javascript
let smokeTests      = new Set(["login", "logout", "homepage", "search"]);
let regressionTests = new Set(["login", "search", "checkout", "payment", "profile"]);
```

1. Create `fullSuite` — a new Set that is the union of both (all unique tests). Print it and its size.

2. Create `sharedTests` — a Set containing only tests that appear in both sets (intersection). Print it and the count.

3. To practise `clear()`, make a temporary copy of `smokeTests`, print it, call `clear()`, then print the emptied copy.

Expected output:
```
Full suite (union): Set(7) { 'login', 'logout', 'homepage', 'search', 'checkout', 'payment', 'profile' }
Total unique tests: 7

Shared tests (intersection): Set(2) { 'login', 'search' }
Tests in both suites: 2

Before clear: Set(4) { 'login', 'logout', 'homepage', 'search' }
After clear:  Set(0) {}
```

---

## Exercise 3: Build a Test Results Map

As your test suite runs, you need to record each test's result and later look up, update, and summarise.

1. Create a Map called `testResults` using the constructor with pairs and pre-populate it:
   - `"Login Test"` → `"PASSED"`, `"Logout Test"` → `"FAILED"`, `"Search Test"` → `"PASSED"`

2. Add a fourth entry `"Cart Test"` → `"PASSED"` using `set()`.

3. Print the result for `"Logout Test"` using `get()`.

4. Update `"Logout Test"` to `"PASSED"` (a rerun succeeded). Print the updated value.

5. Check whether `"Payment Test"` exists using `has()` and print the result.

6. Delete `"Cart Test"`, capture the return value, and print it. Then try to delete `"Ghost Test"` and print that return value too.

7. Print the final Map size, then iterate over all entries and print each test name and result.

Expected output:
```
Logout Test result: FAILED
After rerun: PASSED
Has 'Payment Test': false
delete('Cart Test') returned: true
delete('Ghost Test') returned: false
Final size: 3
Login Test → PASSED
Logout Test → PASSED
Search Test → PASSED
```

---

## Exercise 4: Build a Config Map Three Ways

A test framework needs a config Map. You'll build one using each of the three bulk-population methods.

**Method 1 — constructor with pairs.** Create `httpCodes` using `new Map([[key, value], ...])` with:
- `200` → `"OK"`, `201` → `"Created"`, `404` → `"Not Found"`, `500` → `"Internal Server Error"`

Then look up and print the description for code `404`.

**Method 2 — method chaining.** Create `runConfig` by chaining `.set()` calls directly on a `new Map()`:
- `"browser"` → `"Chrome"`, `"timeout"` → `30000`, `"headless"` → `true`, `"retries"` → `3`

Print the total number of settings.

**Method 3 — Object.entries().** Convert this plain object to a Map:
```javascript
let stagingConfig = { baseUrl: "https://staging.example.com", timeout: 60000, headless: false };
```

Print the resulting Map.

Expected output:
```
404 means: Not Found

Run config settings: 4

Staging config Map: Map(3) { 'baseUrl' => 'https://staging.example.com', 'timeout' => 60000, 'headless' => false }
```

---

## Challenge: Test Execution Tracker

Write a function `recordResult(map, testName, status, duration)` that:
- Adds a new entry with `attempts: 1` if the test name is not yet in the Map
- Updates `status`, `duration`, and increments `attempts` if it already exists

Then simulate this sequence:

```javascript
let executions = new Map();

recordResult(executions, "Login Test",   "PASSED", 2.1);
recordResult(executions, "Search Test",  "FAILED", 1.8);
recordResult(executions, "Logout Test",  "PASSED", 0.9);
recordResult(executions, "Search Test",  "PASSED", 2.0);  // retry
recordResult(executions, "Search Test",  "PASSED", 1.7);  // second retry
```

After all records are added, print each test's name, status, duration, and attempts, then print total tests, passed count, and failed count.

Expected output:
```
Login Test   | PASSED | 2.1s | attempts: 1
Search Test  | PASSED | 1.7s | attempts: 3
Logout Test  | PASSED | 0.9s | attempts: 1

Total tests:  3
Passed: 3
Failed: 0
```

---

## Watch Out For

**`.length` doesn't exist on Set or Map** — use `.size` instead. `mySet.length` returns `undefined` and won't throw an error, which makes this an easy bug to miss.

**`delete()` is silent when a key is missing** — it returns `false` rather than throwing. Always capture the return value if you need to know whether something was actually removed.

**Accessing a Map with bracket notation** — `map["key"]` doesn't work. Maps are not plain objects. Use `map.get("key")` and `map.has("key")`.

**`forEach` on a Map swaps the argument order** — the callback receives `(value, key)`, not `(key, value)`. It's the opposite of what you might expect.

**Updating a Map key doesn't move it** — if you `set("a", newValue)` on an existing key, its position in iteration order stays exactly where it was when it was first inserted.

---

## Quick Reference

### Set
```javascript
new Set([v1, v2, v3])            // create from array, deduplicates automatically
new Set([...setA, ...setB])      // union of two Sets
set.add(value)                   // add one value
set.has(value)                   // true / false
set.delete(value)                // remove; returns true if existed, false if not
set.clear()                      // remove everything
set.size                         // count (property, not a method call)
[...set]                         // convert to plain array
```

### Map
```javascript
new Map([[k1,v1],[k2,v2]])       // create from pairs
new Map(Object.entries(obj))     // create from plain object
map.set(key, value)              // add or update; returns the Map (chainable)
map.get(key)                     // retrieve value (undefined if missing)
map.has(key)                     // true / false
map.delete(key)                  // remove; returns true if existed, false if not
map.clear()                      // remove everything
map.size                         // count (property, not a method call)
```

### Iteration
```javascript
for (let value of mySet) { ... }
for (let [key, value] of myMap) { ... }
mySet.forEach(value => { ... })
myMap.forEach((value, key) => { ... })   // note: value first, key second
[...myMap.keys()]   /   [...myMap.values()]   /   [...myMap.entries()]
```

### Intersection
```javascript
let common = new Set([...setA].filter(v => setB.has(v)));
```

---

## Before You Move On

Can you explain the difference between a Set and a filtered array? Do you know all three ways to bulk-populate a Map, and when you'd choose each one? Can you explain why order is preserved in both Set and Map?

Worth thinking about: in a Playwright test suite, what data would you track in a Map versus a plain object? How could a Set help you ensure no test name accidentally runs twice?
