//Exercise 1

function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
}

// Function to generate username
function generateUsername(firstName, lastName) {
    return firstName.toLowerCase() + lastName.toLowerCase();
}

// Function to generate password
function generatePassword(prefix) {
    return prefix + "@123";
}

// Test the functions
let email = generateEmail("Bruce", "Wayne");
let username = generateUsername("Bruce", "Wayne");
let password = generatePassword("Batman");

console.log(email);
console.log(username);
console.log(password);

//Exercise 2

function generateTestUser(firstName, lastName) {
    return {
        name: `${firstName} ${lastName}`,
        email: generateEmail(firstName, lastName),
        username: generateUsername(firstName, lastName),
        password: "Test@123",
        userId: 1000,
        isActive: true
    };
}

// Use helper functions from Part 1
let user1 = generateTestUser("Tony", "Stark");
let user2 = generateTestUser("Steve", "Rogers");

console.log(user1);
console.log(user2);

//Exercise 3

function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return "VALID";
    } else {
        return "INVALID";
    }
}

// Test it
console.log(validateEmail("test@example.com"));  // VALID
console.log(validateEmail("notanemail")); 