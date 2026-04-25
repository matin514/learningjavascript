const APP_NAME="MyShop E-commerce";
const URL="https://qa.myshop.com"
let environment="QA";
let tester="Bruce Wayne";
let date=new Date().toISOString().split("T")[0];
let isAutomationEnabled="Yes";

console.log("```");
console.log("==========================================");
console.log("    TEST ENVIRONMENT CONFIGURATION   ");
console.log("==========================================");
console.log("App Name: "+APP_NAME);
console.log("App URL: "+URL);
console.log("Environment: "+environment);
console.log("Tester: "+tester);
console.log("Date: "+date);
console.log("Automation Enabled: "+isAutomationEnabled);
console.log("==========================================");
console.log("```");;

