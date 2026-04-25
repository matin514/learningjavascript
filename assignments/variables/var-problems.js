// example 1

//console.log("Status before declaration: " + testStatus);
let testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);

// example 2

if (true) {
    let tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
//console.log("Outside block: " + tempUser);

//example 3


for (let i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
//console.log("After loop, i = " + i);