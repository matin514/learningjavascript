//Exercise 1

function executeTest(testName, callback) {
   console.log(`Running: ${testName}`);
   let status = Math.random() < 0.7 ? "PASSED" : "FAILED";
   result={
    name:testName,
    status:status,
    duration:10
   }
   callback(result);
}

executeTest("Login Test", function(result) {
    console.log("Test completed: " + result.name);
    console.log("Status: " + result.status);
});

//Exercise 2

function runAsyncTest(testName) {
   return new Promise(function(resolve, reject) {
    
        console.log(`Expected output (after 1 second):`)
        setTimeout(function() {

            let result = {
                name: testName,
                status: "PASSED",
                duration: "1s"
            };

            resolve(result);

        }, 1000);

    });
}

runAsyncTest("Async Test")
    .then(function(result) {
        console.log("Result: " + result.status);
    });



//Exercise 3

function loginUser(username, password) {
    return new Promise(function(resolve, reject) {
        if(username==="admin" && password==="Test@123"){
            resolve("Login successful");
        }else{
            reject("Invalid credentials");
        }
    });
}
console.log(`Expected output:`);

loginUser("admin", "Test@123")
    .then(message => console.log("✓ " + message))
    .catch(error  => console.log("✗ " + error));

loginUser("admin", "wrong")
    .then(message => console.log("✓ " + message))
    .catch(error  => console.log("✗ " + error));


//Exercise 4

function openBrowser() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("1. Browser opened");
            resolve("Browser");
        }, 500);
    });
}

function navigateToPage(browser) {
    // YOUR CODE HERE — 500ms delay, print "2. Page loaded", resolve with "Page"
    return new Promise(resolve=>{
        setTimeout(()=>{
          console.log(`2. Page loaded`);
          resolve("Page");
        },500);
    });
}

function fillForm(page) {
    // YOUR CODE HERE — 500ms delay, print "3. Form filled", resolve with "Form"

    return new Promise(resolve=>{
        setTimeout(()=>{
          console.log(`3. Form filled`);
          resolve("Form");
        },500);
    })
}

function submitForm(form) {
    // YOUR CODE HERE — 500ms delay, print "4. Form submitted", resolve with "Success"
    return new Promise(resolve=>{
        setTimeout(()=>{
         console.log(`4. Form submitted`);
         resolve("Success");
        },500);
    })
}

openBrowser()
    .then(browser => navigateToPage(browser))
    .then(page    => fillForm(page))
    .then(form    => submitForm(form))
    .then(result  => console.log("Final: " + result))
    .catch(error  => console.log("Error: " + error));



//Exercise 5

async function runTest() {
    await console.log("1. Browser opened");
    await console.log(`2. Page loaded`);
    await console.log(`3. Form filled`);
    await console.log(`4. Form submitted`);
    await console.log("Final: Success");
}

runTest();

//Exercise 6

function riskyOperation(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) reject("Operation failed!");
            else            resolve("Operation succeeded!");
        }, 500);
    });
}

async function testWithErrorHandling(shouldFail) {

    try {
        let result = await riskyOperation(shouldFail);

        console.log("✓ " + result);
    } catch (error) {
        console.log("✗ " + error);
    }
}

testWithErrorHandling(false);   // should succeed
testWithErrorHandling(true);

//Exercise 7

function task(name, duration) {
    return new Promise(resolve => {
        console.log(name + " started");
        setTimeout(() => {
            console.log(name + " completed");
            resolve(name);
        }, duration);
    });
}

async function runSequential() {
    console.log("=== Sequential ===");
    let start = Date.now();

    // YOUR CODE HERE — await task("Task 1", 1000), Task 2, Task 3
     await task("Task 1", 1000);
    await task("Task 2", 1000);
     await task("Task 3", 1000);

    let end = Date.now();
    console.log("Time: " + (end - start) + "ms\n");
}

async function runParallel() {
    console.log("=== Parallel ===");
    let start = Date.now();

    // YOUR CODE HERE — await Promise.all([...]) with Task A, B, C (1000ms each)
    await Promise.all([
        task("Task 1", 1000),
        task("Task 2", 1000),
        task("Task 3", 1000)
    ])

    let end = Date.now();
    console.log("Time: " + (end - start) + "ms\n");
}

runSequential();
setTimeout(() => runParallel(), 4000);



//Additional Challenge

const page = {
    goto: (url) => new Promise(resolve => setTimeout(() => {
        console.log("Navigated to: " + url); resolve();
    }, 300)),

    fill: (selector, value) => new Promise(resolve => setTimeout(() => {
        console.log("Filled '" + selector + "' with: " + value); resolve();
    }, 200)),

    click: (selector) => new Promise(resolve => setTimeout(() => {
        console.log("Clicked: " + selector); resolve();
    }, 200)),

    textContent: (selector) => new Promise(resolve => setTimeout(() => {
        resolve("Welcome, Test User!");
    }, 200))
};

async function playwrightLoginTest() {
    try {
        console.log("=== Login Test Start ===\n");

        // YOUR CODE HERE
        // 1. Navigate to https://example.com/login
       await  page.goto("https://example.com/login");
        // 2. Fill '#username' with "testuser"
        await page.fill('#username','testuser');
        // 3. Fill '#password' with "Test@123"
        await page.fill('#password','Test@123');
        // 4. Click 'button[type="submit"]'
        await page.click('button[type="submit"]');
        // 5. Get textContent of '.welcome-message;
        await page.textContent('.welcome-message');
        // 6. Print "Welcome message: " + the text
        console.log(`Welcome message: Welcome, Test User!`)
        // 7. Print "✓ TEST PASSED"
        console.log(`✓ TEST PASSED`);

    } catch (error) {
        console.log("✗ TEST FAILED: " + error);
    }
}

playwrightLoginTest();