//Exercise 1

let email="missing@domain";

if(email.includes("@") && email.includes(".")){
    console.log("✅ Valid email format");

}else{
    console.log("❌ Invalid email format");
}


//Exercise 2

let testResult="PASSED";
console.log("```");
console.log(`Test Status: ${testResult}`);

if(testResult==="PASSED"){
     console.log("✓ Test passed successfully");

}else if(testResult==="FAILED"){
    console.log("✗ Test failed - check logs");

}else if(testResult==="SKIPPED"){
    console.log("⊘ Test skipped");

}else{
    console.log("? Unknown test status");
}


// Exercise 3

let password="Test@12345";
console.log("```");
console.log('Password: ${password}');
console.log(`Length: ${password.length} characters`);

if(password.length<6){
    console.log("❌ Weak password - too short");
}else if(password.length<10){
     console.log("⚠️ Medium password strength");
}else{
    console.log("✅ Strong password");
}
console.log("```");

//Exercise 4

let score=50;

console.log("```");
console.log(`Test Score: ${score}`);
if(score>=90){
    console.log("Grade: A (Excellent)");

}else if(score>=80 && score <=89){
    console.log("Grade: B (Good)");
}else if(score >=70 && score<=79){
    console.log("Grade: C (Average)");
}else if(score >=60 && score<=69){
    console.log("Grade: D (Pass)");
}else if(score<60){
    console.log("Grade: F (Fail)");
}
console.log("```");

//Exercise 5
function checkTestData(result,duration){
    if(result===null){
        console.log("Error: No result");
    }else{
        if(duration<=0){
            console.log("Error: Negative duration");
        }else{
            if(duration>10){
                console.log("Error: Duration too long");
            }else{
                console.log("Valid: PASSED in 2s");
            }
        }
    }
}

checkTestData("PASSED", 2);


//Exercise 6

let status="PASSED";

switch(status){
    case "PASSED":
        console.log("✓ Test passed successfully");
        break;
    case "FAILED":
        console.log("✗ Test failed - check logs");
        break;
    case "SKIPPED":
        console.log("⊘ Test skipped");
        break;
    case "PENDING":
        console.log("⏳ Test pending - not yet run");
        break;
    default:
        console.log("? Unknown test status");
}


//Exercise 7

let statusCode = 200;

switch (statusCode) {
    case 200:
        console.log("✅ 200 OK — request successful");
        break;
    case 201:
        console.log("✅ 201 Created — resource created");
        break;
    case 400:
    case 401:
    case 403:
        console.log("❌ Client error — check your request");
        break;
    case 404:
        console.log( "❌ 404 Not Found — endpoint does not exist");
        break;
    case 500:
    case 502:
    case 503:
        console.log("🔥 Server error — backend issue");
        break;
    default:
         console.log("? Unknown status code: " + statusCode);
}


//Exercise 8a

let marks = 75;

// Math.floor(85 / 10) = 8  → maps to grade B
switch (Math.floor(marks / 10)) {
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

//Exercise 8b

let duration = 0.5;  

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

//Exercise 8c

let priority = "high";

switch (priority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}

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


//Additional Challenge

function validateTestUser(username, password, email) {
    console.log("Validating test user data...\n");
    if(username===""){
        console.log("Error: User must not be empty");
    }else if(password===""){
        console.log("Error: Password must not be empty");
    }else if(password.length<8){
        console.log("Error: Password must be at least 8 characters");
    }else if(!email.includes("@") || !email.includes(".")){
        console.log("Error: Email must contain @ and .");
    }else{
       console.log(`Username: ${username}  ✓`);
       console.log(`Password: ${password} ✓`);
       console.log(`Email: ${email} ✓`);
       console.log("✅ All validations passed - User data ready!");
    }
    
}

validateTestUser("testuser","test@example.com","test@example.com");