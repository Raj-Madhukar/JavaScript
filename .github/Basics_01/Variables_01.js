//const , let and var variable - used to store your data value 
const accountNumber =  2345678
let email = "ram@123.com"
var password = "R23401"
cityName = "New Delhi"
// Default variable
let accountState;

// lets See which can be change and which one not
 //accountNumber = 456 //not allowed
email = "rama@321.com"
password = "S1041"
cityName = "Noida"

/* Prefer not to use var because issue of block scope and functional scope*/

console.log(accountNumber);
console.table([accountNumber,email,password,cityName,accountState])
