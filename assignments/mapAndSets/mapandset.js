//Exercise 1

let environments= new Set();
environments.add("staging");
environments.add("production");
environments.add("staging");
environments.add("uat");
environments.add("production");
environments.add("dev");

console.log(`Expected output:`)
console.log(`Size (with duplicates ignored): ${environments.size}`);
console.log(`Has 'staging': ${environments.has("staging")}
Has 'qa': ${environments.has("qa")}`);
console.log(`delete('dev') returned: ${environments.delete("dev")}
delete('qa') returned: ${environments.delete("qa")}`);
console.log(environments);
console.log(`Final size: ${environments.size}`);

//Exercise 2

let smokeTests      = new Set(["login", "logout", "homepage", "search"]);
let regressionTests = new Set(["login", "search", "checkout", "payment", "profile"]);

const union=smokeTests.union(regressionTests);
const common=smokeTests.intersection(regressionTests);

console.log(union);
console.log(`Total unique tests: ${union.size}`);
console.log(common);
console.log(`Tests in both suites: ${common.size}`);

let practice=new Set(["login", "logout", "homepage", "search"]);
console.log(practice);
practice.clear();
console.log(practice);

//Exercise 3

const testResults = new Map([
  ['Login Test', 'PASSED'],
  ['Logout Test', 'FAILED'],
  ['Search Test', 'PASSED']
]);

testResults.set("Cart Test","PASSED");

console.log(`Expected output:`);

console.log(`Logout Test result: ${testResults.get("Logout Test")}`);
testResults.set("Logout Test","PASSED");
console.log(`After rerun: ${testResults.get("Logout Test")}`);
console.log(`Has 'Payment Test': ${testResults.has("Payment Test")}`);
console.log(`delete('Cart Test') returned: ${testResults.delete("Cart Test")}
delete('Ghost Test') returned: ${testResults.delete("Ghost Test")}`);
console.log(`Final size: ${testResults.size}`)
for (const [key, value] of testResults) {
  console.log(`${key}→ ${value}`);
}

//Exercise 4

let httpCodes=new Map([
    [200,"OK"],
    [201,"Created"],
    [404,"Not Found"],
    [500,"Internal Sever Error"]
]);

console.log(`404 means: ${httpCodes.get(404)}`);

let runConfig= new Map().set("browser","Chrome").set("timeout",30000).set("headless",true).set("retries",3);

console.log(`Run config settings: ${runConfig.size}`);

let stagingConfig = { baseUrl: "https://staging.example.com", timeout: 60000, headless: false };

let objectMap=new Map(Object.entries(stagingConfig));

console.log(objectMap);

// Additional Challenge

function recordResult(map, testName, status, duration) {

    // Check if test already exists
    if (map.has(testName)) {

        // Get existing record
        let test = map.get(testName);

        // Update values
        test.status = status;
        test.duration = duration;
        test.attempts++;

    } else {

        // Add new test entry
        map.set(testName, {
            status: status,
            duration: duration,
            attempts: 1
        });
    }
}

let executions = new Map();

recordResult(executions, "Login Test",  "PASSED", 2.1);
recordResult(executions, "Search Test", "FAILED", 1.8);
recordResult(executions, "Logout Test", "PASSED", 0.9);
recordResult(executions, "Search Test", "PASSED", 2.0); // retry
recordResult(executions, "Search Test", "PASSED", 1.7); // second retry

// Counters
let passed = 0;
let failed = 0;

// Print test results
for (let [testName, details] of executions) {

    console.log(
        `${testName} | ${details.status} | ${details.duration}s | attempts: ${details.attempts}`
    );

    // Count passed/failed
    if (details.status === "PASSED") {
        passed++;
    } else {
        failed++;
    }
}

// Print summary
console.log("\nTotal tests:", executions.size);
console.log("Passed:", passed);
console.log("Failed:", failed);