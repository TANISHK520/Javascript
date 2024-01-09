//Immediately invoked function expression iife
/*jaise hi function likha execute hojay */

// (function defination)();
//()();
/*; use this becouse function invoke toh hogya but pta nahi hai kaha context rokha hai */



/*NAMED IIFE */
(function chai(){
    console.log("DB connected")
})();

/*global scope ke pollution se problem hoti hai kai baar, so global scope ke pollution ko htane ke lie we use iife */




/*function defination is using arrow function */
/*simple IIFE */
(
    ()=>{console.log("hi")}
)();



/*pass parameter */
(
    (name)=>{console.log(`hello ${name}`)}
)("tanish");

/*write two iife , remember in the end use ; so that both iife executed properly */




console.log("hello world");
var a=2;
console.log(a);
let b=2;
b=3;
console.log(b);
const c=1;
// c=3; TypeError: Assignment to constant variable.
console.log(c);


let namee="tanish";
let age=22;
let isMarried=false;

console.log("name is "+ namee + " and age is " + age);
console.log("name is");
console.log(namee);


if (isMarried) {
    console.log(namee +" is married");
    
}
else{
    console.log(namee +" is not married");

}

let sum=0;
for (let i = 1; i <=5; i++) {
    sum=sum+i;
}
console.log(sum)


const array1=["tanish","kapoor","persistent",23];
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);

const ages=[21,22,27,23,24,25];
for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}

let biggest=ages[0];
for(let i=1;i<ages.length;i++){
    if(ages[i]>biggest){
        biggest=ages[i];
    }
}
console.log("biggest age here is: "+biggest);

let name1=["tanish","rahul","rani"];
let gender=["male","male","female"];
for(let i=0;i<gender.length;i++){
    if(gender[i]=="male"){
        console.log(name1[i]);
    }
}

const obj1={
    firstname:"tanish",
    age:22
}
console.log(obj1["firstname"]);
console.log(obj1.age);



const arrayofobject=[{
    firstname:"tanish",
    gender:"male",
    metadata:{
        age:22
    }

},{
    firstname:"Rahul",
    gender:"male",
    metadata:{
        age:23
    }

},{
    firstname:"rani",
    gender:"female",

}];

for(let i=0;i<arrayofobject.length;i++){
    if(arrayofobject[i]["gender"]=="male"){
        console.log(arrayofobject[i]["firstname"]);
        console.log(arrayofobject[i]["metadata"]["age"]);
    }
}
// BETTER IN A SINGLE DATA STRUCTURE EVERYTHING COMES
