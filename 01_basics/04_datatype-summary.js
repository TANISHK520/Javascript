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