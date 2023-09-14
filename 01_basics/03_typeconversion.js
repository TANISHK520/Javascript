let score="33"
console.log(score); /*33*/
console.log(typeof score); /*string*/
console.log(typeof(score)); /*string*/

let scoreInNumber=Number(score);
console.log(scoreInNumber); /*33*/
console.log(typeof scoreInNumber); /*number*/
console.log(typeof(scoreInNumber)); /*number*/


let score1=null
console.log(score1); /*null*/
console.log(typeof score1); /*object*/

let scoreInNumber1=Number(score1);
console.log(scoreInNumber1); /*0*/
console.log(typeof scoreInNumber1); /*number*/


let score2=undefined;
console.log(score2); /*undefined*/
console.log(typeof score2); /*undefined*/

let scoreInNumber2=Number(score2);
console.log(scoreInNumber2); /*NaN*/
console.log(typeof scoreInNumber1); /*number*/

let val="33cv"
console.log(typeof val);
let newval=Number(val);
console.log(newval);  /*NaN*/
console.log(typeof newval); /*number*/
// above is contradictory 

/*
"33" =>33
"33abc"=>NaN
true =>1
false =>0
*/

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  /*1=>true 0=>false ""=>false "tanish"=>true*/

let no=33
let stringNo=String(no)
console.log(stringNo);
console.log(typeof stringNo);  /*33=>"33"*/
console.log("hi");



