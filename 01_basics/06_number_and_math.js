/*1*/
const score=400
console.log(score);

/*2*/
const score1=new Number(400)
console.log(score1);
console.log(score1+1);
console.log(score1)

console.log(typeof score1.toString());
console.log(score1.toString().length);
/*Precision */
console.log(score1.toFixed(3));


const other=123.567
console.log(other.toPrecision(4));
console.log(other.toPrecision(5));


const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

/*********************************************************************************************************************/
console.log(Math)
console.log(Math.abs(-10));
console.log(Math.round(4.33));
console.log(Math.round(4.77));
console.log(Math.ceil(2.1));
console.log(Math.floor(3.5));
console.log(Math.sqrt(2));
console.log(Math.pow(3,4));
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));
/****impt*** */
/*value is between 0 and 1 [0,1]*/
console.log(Math.random()); /* 0 to 1 random*/

console.log((Math.random()*10)+1) /*+1 to avoid case of 0.1 */
console.log(Math.floor(Math.random()*10)+1);  /*1 to 10*/

let min=10
let max =20
console.log(Math.floor(Math.random()*(max-min+1))+min); /*[10,20]*/