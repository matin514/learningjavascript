//Exercise 1

let scoreA = 85;
let scoreB = scoreA;
scoreB = 50;
console.log("scoreA:", scoreA);
console.log("scoreB:", scoreB);

let result1 = { testName: "Login", status: "PASSED" };
let result2 = result1;
result2.status = "FAILED";
console.log("result1.status:", result1.status);
console.log("result2.status:", result2.status);

function resetScore(s) {
    s = 0;
}
let myScore = 99;
resetScore(myScore);
console.log("myScore after resetScore():", myScore);

function markFailed(test) {
    test.status = "FAILED";
}
let myTest = { testName: "Checkout", status: "PASSED" };
markFailed(myTest);
console.log("myTest.status after markFailed():", myTest.status);

//Exercise 2

let baseConfig = { browser: "Chrome", timeout: 30000, headless: false };

function runSmokeTest(config) {
    config.timeout  = 5000;
    config.headless = true;
    console.log("Smoke:      " + config.browser + ", " + config.timeout + "ms, headless=" + config.headless);
}

function runRegressionTest(config) {
    console.log("Regression: " + config.browser + ", " + config.timeout + "ms, headless=" + config.headless);
}

runSmokeTest({...baseConfig});
runRegressionTest(baseConfig);

//Exercise 3

let loginSuite = {
    name: "Login Suite",
    settings: { retries: 3, screenshotOnFail: true }
};

// Deep copy
let quickSuite = JSON.parse(JSON.stringify(loginSuite));

quickSuite.name = "Quick Suite";
quickSuite.settings.retries = 0;

console.log("loginSuite.name:             " + loginSuite.name);
console.log("loginSuite.settings.retries: " + loginSuite.settings.retries);
console.log("quickSuite.name:             " + quickSuite.name);
console.log("quickSuite.settings.retries: " + quickSuite.settings.retries);

//Exercise 4

function assertResultMatches(expected, actual) {

    if (JSON.stringify(expected) === JSON.stringify(actual)) {
        console.log("✅ Test PASSED - result matches expected");
    } else {
        console.log("❌ Test FAILED - result does not match expected");
    }
}

let expectedResult = { status: "PASSED", score: 100, duration: 2.5 };

// Matching object
let actualResult1 = { status: "PASSED", score: 100, duration: 2.5 };

// Non-matching object
let actualResult2 = { status: "FAILED", score: 80, duration: 1.1 };

assertResultMatches(expectedResult, actualResult1);
assertResultMatches(expectedResult, actualResult2);

//Additional Challenge

function createTestUser(overrides = {}) {

    let defaults = {
        username: "testuser",
        password: "Test@123",
        role: "patient",
        active: true
    };

    // Create and return a fresh merged object
    return { ...defaults, ...overrides };
}

let patientUser = createTestUser();

let adminUser = createTestUser({
    role: "admin"
});

let doctorUser = createTestUser({
    username: "drsmith",
    role: "doctor"
});

patientUser.active = false;

console.log("patient:", patientUser.username, "| role:", patientUser.role, "| active:", patientUser.active);

console.log("admin:  ", adminUser.username, "| role:", adminUser.role, "| active:", adminUser.active);

console.log("doctor: ", doctorUser.username, "| role:", doctorUser.role, "| active:", doctorUser.active);