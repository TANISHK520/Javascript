const accountId=144553
let accountEmail="Kapoor@google.com"
var accountPassword="12345"
accountCity="Ladwa"
let accountState;
// accountId=33

// we got this error when we run this without commenting above 5th line
// TypeError: Assignment to constant variable. therefore we cant change const variable

accountEmail="kt@google.com"
accountPassword="344"
accountCity="bangluru"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// alternate way
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);



// in var there is no power on scope but by using let averything works in scope
/*
prefer not to use var becoz of issue in block scope and functional scope as shows below
*/

var a=10
if(1){
    var a=11;
    a++;
    console.log(a);
}
console.log(a);
// o/p: 12 12


let b=10
if(1){
    let b=11;
    b++;
    console.log(b);
}
console.log(b);
// o/p:12 10 therefore prefer let