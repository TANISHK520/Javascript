/*
Data types-> primitive data types and non primitive datatypes
                    |                              |
                call by value                  call by reference                [DIFFERENCE]
                    |
                1.String                         1.Arrays
                2.Number                         2.Objects
                3.Boolean                        3.Functions
                4.null: means empty
                5.undefined: means only 
                decleared like let val;
                6.Symbol: for uniqueness
                7.BigInt: for very big values


***********************************************************************************************************************************
const score=100
let available=true
therefore javascript is dynamically typed language becox bydfalu score is number as 100 is assigned

10.3->number , nothing like floar thing
10->number

const id=Symbol('122'); 
const otherId=Symbol('122);
console.log(id===otherid)=>false;
******************************************************************************************************************************************


*******************syntax***************************

const heroes=["shaktiman","nagraj","doga"];
 
let myObj={
    name:"tanish",
    age=23,
}

let myFunction=function(){
    console.log("hello world");
}



**interview::***typeof(null)->object
typeof(bigNumber)->undefined
typeof(undefined)->undefined
typeof(Boolean)->Boolean
typeof(nonptimitive)->object
ex:typeof(function)->Function (we call it function object)



*/

/*
stack memory ->used by primitive data types ->call by value ->value milega , no change in original value
heap memory->used by non primitive data types ->call by reference ->whatsoever changes will reflected in original value*/
 

let channalName="one"
// pass by value 
let channalName1=channalName
console.log(channalName)
console.log(channalName1)
channalName1="two"
console.log(channalName)
console.log(channalName1);



let user1={
    name:"Tanish",
    age:22,
}
// pass by reference
let user2=user1
console.log(user1.name);
console.log(user2.name);
user2.name="kapoor"
console.log(user1.name);
console.log(user2.name);


