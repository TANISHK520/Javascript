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