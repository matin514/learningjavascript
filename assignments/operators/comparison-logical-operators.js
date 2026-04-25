
//Example 1
let age=25;
console.log("```")
console.log("Age: "+age);
if(age>=18 && age<=65){
    console.log("✅ Valid age range (18-65)");
}else{
    console.log("❌ Age must be between 18 and 65");
}
console.log("```")


//Example 2

let username="testuser";
let password="Test@123";
let email="";


console.log("```")
console.log("Checking credentials...");
(username!="")?console.log("UserName: "+username):console.log("UserName: (empty)");
(password!="")?console.log("UserName: ******* (8 characters)"):console.log("Password: (empty)");
(email!="")?console.log("Email: "+email):console.log("Email: (empty)");

if((username!="" && password!="") || email!=""){
    console.log("✅ Sufficient login credentials");
}else{
    console.log("❌ Insufficient credentials - provide username+password OR email");
}


//Example 3

let status="PASSED";
let errorCount=0;
console.log("Test Status: "+status);
console.log("Error Count: "+errorCount);
console.log("Validation: ");
console.log("Status is acceptable: "+(status==="PASSED" && status==="SKIPPED"));
console.log("No errors: "+(errorCount===0));
console.log();
if((status==="PASSED" || status==="SKIPPED") && errorCount===0){
    console.log("✅ Test completed successfully")
}else{
    console.log("❌ Test has issues");
}

//Example 4

let responseTime=2.5;


console.log("Response Time Test");
console.log("Threshold: 3 seconds");
console.log("Actual: "+responseTime+" seconds")
if(responseTime<3){
    console.log("✅ Performance test PASSED (response time: "+responseTime+" seconds)");
}else{
    console.log("❌ Performance test FAILED (response time: X seconds, threshold: 3 seconds)");
}