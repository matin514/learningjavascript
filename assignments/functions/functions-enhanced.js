//Exercise 1

function configureTest(testName="Login Test", browser="Chrome", timeout=30000, environment="staging"){

    console.log(`Test: ${testName}`);
    console.log(`Browser: ${browser}`);
    console.log(`Timeout: ${timeout}ms`);
    console.log(`Environment: ${environment}`);

}

configureTest("Login Test");
configureTest("Login Test", "Firefox");
configureTest("Login Test", "Safari", 60000);
configureTest("Login Test", "Chrome", 30000, "production");

configureTest("Edge Case", ""); 
configureTest("Edge Case", undefined);

//Exercise 2

function validateFormNested(username, password, age) {
 
    if(username === "") return "Username is required";
    if(password.length < 8) return "Password must be at least 8 characters";
    if(age<18) return "Must be 18 or older";
    return "Form is valid";
}

console.log(validateFormNested("", "Test@123", 25));
console.log(validateFormNested("john", "abc", 25));
console.log(validateFormNested("john", "Test@123", 16));
console.log(validateFormNested("john", "Test@123", 25));

//Exercise 3

const hasMinLength=(password)=>{
     return password.length>=8;
}

const hasSpecialChar=(password)=>{
    return (password.includes("@") || password.includes("!") || password.includes("#"));
}

const hasUppercase=(password)=>{
    return /[A-Z]/.test(password);
}

let passwordValidators=[hasMinLength,hasSpecialChar,hasUppercase];

function validatePassword(password){
    let count=0;
    for(let validator of passwordValidators){
        if(validator(password)){
            console.log(`✓ Passed check ${++count}`);
        }else{
            console.log(`✗ Failed check ${++count}`);
            return;
        }
    }
    console.log(`✓ Password is valid!`);
}

validatePassword("Test@123");
validatePassword("weak");

//Exercise 4

function makeUrlBuilder(baseUrl){
    return (path)=>{
        return baseUrl+path;
    }

}

const stagingUrl=makeUrlBuilder("https://staging.example.com");
const productionUrl=makeUrlBuilder("https://example.com");
const devUrl=makeUrlBuilder("https://dev.example.com");

console.log("Staging URLs:");
console.log(stagingUrl("/login"));
console.log(stagingUrl("/dashboard"));

console.log("Production URLs:");
console.log(productionUrl("/login"));
console.log(productionUrl("/dashboard"));

console.log(devUrl("/api/users"));

//Additional Challenge 

function makeUserValidator(minPasswordLength=8, minAge=18){

    return (username, password, age) =>{
        if(username==="") return "Username is empty";
        if(username.length>20 || username.length<3) return "Username length not valid";
        if(password.length<minPasswordLength) return "❌ Password too short";
        if(age<minAge) return "❌ Age not valid";
        return "✅ Valid user";
    }

}

const standardValidator = makeUserValidator(); 
console.log(standardValidator("testuser", "Test@123", 25)); 

const strictValidator   = makeUserValidator(12, 21);
console.log(strictValidator("testuser", "Test@123", 25));   
console.log(strictValidator("testuser", "Test@123Secure!", 25)); 
