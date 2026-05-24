//Exercise 1

function fetchConfig(source) {
    if (source === "broken") throw new Error("Connection refused");
    if (source === "empty")  throw new Error("Config file is empty");
    return { browser: "Chrome", timeout: 5000 };
}


let sources = ["ok", "broken", "empty"];
for (let source of sources) {
    let result = safeLoadConfig(source);
    if (result.ok) {
        console.log("Loaded (" + source + "):", result.config.browser + ", " + result.config.timeout + "ms");
    } else {
        console.log("Failed (" + source + "): " + result.error);
    }
}

function safeLoadConfig(source){
    try{

        let config = fetchConfig(source);
        return {
            ok: true,
            config: config
        };

    }catch(error){
        return {
            ok: false,
            error: error.message
        };
    }
}

//Exercise 2

function runTest(testName, shouldFail) {
    if (shouldFail) throw new Error("Element not found on " + testName);
}

function runWithBrowser(testName, shouldFail){
    console.log(`[browser] Opening for: ${testName}`);
    try{
        runTest(testName,shouldFail);
        console.log(`[test] PASSED`);
    }catch(error){
       console.log(`[test] FAILED: ${error.message}`)
    }finally{
        console.log(`[browser] Closed`);
    }
}

runWithBrowser("Login Test", false);
console.log();
runWithBrowser("Search Test", true);

//Exercise 3

let cases = [
    [null,                  "Test@123"],
    ["",                    "Test@123"],
    ["tester@example.com",  "short"],
    ["notanemail",          "Test@123"],
    ["tester@example.com",  "Test@123"]
];

for (let [u, p] of cases) {
    try {
        validateCredentials(u, p);
        console.log("Valid:", u);
    } catch (e) {
        console.log("Error:", e.message);
    }
}

function validateCredentials(username,password){
    if(username===null || password===null){
            throw new Error("Credentials are required");
    }else if(username===undefined || password===undefined){
           throw new Error("Credentials are required");
    }else if(username===""){
        throw new Error("Username cannot be empty");
    }else if(password.length<8){
        throw new Error("Password must be at least 8 characters");
    }else if(!username.includes("@")){
        throw new Error("Username must be a valid email address");
    }else{
        return true;
    }
    }

//Exercise 4

function parseResult(result) {
    if (result === null || result === undefined) {
        throw new TypeError("result cannot be null or undefined");
    }
    if (result.score < 0 || result.score > 100) {
        throw new RangeError("score " + result.score + " is out of range (0-100)");
    }
    if (result.status !== "PASSED" && result.status !== "FAILED") {
        throw new Error("unknown status '" + result.status + "'");
    }
    return true;
}

function handleResult(result){
    try{
        parseResult(result);
        console.log(`Valid result: ${result.status} (score: ${result.score})`);
    }catch(error){
        if(error instanceof TypeError){
            console.log(`TYPE ERROR: ${error.message}`);
        }else if(error instanceof RangeError){
             console.log(`RANGE ERROR: ${error.message}`);
        }else{
            console.log(`ERROR: ${error.message}`);
        }
    }
}

handleResult(null);
handleResult({ status: "PASSED", score: 150 });
handleResult({ status: "PENDING", score: 85 });
handleResult({ status: "PASSED", score: 85 });


//Additional Challenge

class TestError extends Error {

    constructor(message, testName, errorCode) {
        super(message);

        this.name = "TestError";
        this.testName = testName;
        this.errorCode = errorCode;
    }
}

function executeTest(testName, fn) {

    try {

        fn();

        console.log("✓ " + testName + " passed");

    } catch (error) {

        throw new TestError(
            error.message,
            testName,
            "TEST_FAILED"
        );
    }
}

function record(name, fn) {

    try {

        executeTest(name, fn);

    } catch (e) {

        console.log(
            "✗ " +
            e.testName +
            " — " +
            e.name +
            " [" +
            e.errorCode +
            "]: " +
            e.message
        );
    }
}

record("Login Test", () => {
    
});

record("Search Test", () => {
    throw new Error("Expected 'Results' but got 'No results'");
});

record("Logout Test", () => {
   
});