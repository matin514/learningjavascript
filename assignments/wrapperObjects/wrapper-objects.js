//Exercise 1

let a = "PASSED";
let b = new String("PASSED");

let c = 42;
let d = new Number(42);

let e = true;
let f = new Boolean(true);

console.log(typeof a);  // ?
console.log(typeof b);  // ?
console.log(typeof c);  // ?
console.log(typeof d);  // ?
console.log(typeof e);  // ?
console.log(typeof f); 

//Exercise 2

function assertStatusMatch(expected, actual) {
    if (String(expected) === String(actual)) {
        console.log("✅ Status matches: " + actual);
    } else {
        console.log("❌ Status mismatch! Expected: " + expected + ", Got: " + actual);
    }
}

// Case 1: Both are primitives — works fine
let status1 = "PASSED";
let status2 = "PASSED";
assertStatusMatch(status1, status2);

// Case 2: One is a wrapper object — BREAKS!
let status3 = "PASSED";
let status4 = new String("PASSED");
assertStatusMatch(status3, status4);

// Case 3: Two wrapper objects — ALSO BREAKS!
let status5 = new String("PASSED");
let status6 = new String("PASSED");
assertStatusMatch(status5, status6);

//Exercise 3

function checkFeatureEnabled(flag) {
    if (flag) {
        console.log("Feature is ENABLED");
    } else {
        console.log("Feature is DISABLED");
    }
}

let featureA = true;
let featureB = false;
let featureC = false;   

checkFeatureEnabled(featureA);   
checkFeatureEnabled(featureB);  
checkFeatureEnabled(featureC); 

console.log("typeof featureC:", typeof featureC);
console.log("Boolean(featureC):", Boolean(featureC));

//Exercise 4

function normaliseEmail(input){
    console.log(input.trim().toLowerCase());
}

function normaliseUsername(input){
    console.log(input.trim().toLowerCase().replace("@",""));
}


let emails = [
    "  TEST@EXAMPLE.COM  ",
    "User@Example.COM",
    "ADMIN@TEST.ORG   "
];

let usernames = [
    "  TestUser  ",
    "@AdminUser",
    "JOHN_DOE "
]

console.log(`Normalised emails:`);
for(let email of emails){
    normaliseEmail(email);
}
console.log(`Normalised usernames:`);

for(let username of usernames){
    normaliseUsername(username);
}


function areEmailsEqual(email1, email2){
     if(email1.trim().toLowerCase()===email2.trim().toLowerCase()){
        return true;
     }else{
        return false;
     }
}

console.log(areEmailsEqual("abc@gmail.com","ABc@gmail.com"));
console.log(areEmailsEqual("123@gmail.com","def@gmail.com"));


//Additional Challenge

function sanitiseTestUser(user) {
  
    let username = user.username.trim().toLowerCase();

    
    let email = user.email.trim().toLowerCase();

   
    if (!email.includes("@")) {
        console.log(`⚠ Warning: invalid email for user '${username}'`);
        email = null;
    }

    
    let role = user.role.trim().toLowerCase();

   
    let age = Number(user.age);

  
    return {
        username,
        email,
        role,
        age
    };
}

let rawUsers = [
    { username: "  TestUser  ", email: "TEST@EXAMPLE.COM", role: "ADMIN",   age: "25" },
    { username: "JOHN ",        email: "john@test.org",     role: "user",    age: "30" },
    { username: "  baduser",    email: "not-an-email",      role: "VIEWER",  age: "22" }
];

rawUsers.forEach(user => {
    let clean = sanitiseTestUser(user);
    console.log(clean);
});