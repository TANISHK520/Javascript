/*objects*/
/*
singleton
when we declare onject like literal then object is not singleton
when object is created by constructor then it is singleton
*/

/*object using literal */
const jsUser1={} /*empty object*/
const mysym=Symbol("key1")
const jsUser={
    name:"tanish", /*name is bydefault as "name"*/
    "full name":"tanish Kapoor",
    [mysym]:"mykey1",/*[] inside this is the way to use symbol as a key else it will be treated as a string*/
    age:18,
    email:"tanish@google.com",
    isLoggenIn:false,
    lastLoginDays:["Monday","Saturday"],
}

/*two ways to access*/
console.log(jsUser.email);
console.log(jsUser["email"]);

// console.log(jsUser.full name); /*cant accesss by this way */
console.log(jsUser["full name"]); /*thatswhy both ways are impt */

/*****how to access symbol value*******/
console.log(jsUser[mysym]);


/*how to change*/
jsUser.email="jn@er"

// Object.freeze(jsUser)
/*if we change now we are not able to , no error but there is no change */
/*jsUser.email="jn@newc" /*no error but value remain same */
console.log(jsUser["email"]);


/*add function in object */
jsUser.greeting=function(){
    console.log("hello js user");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo=function(){
    console.log(`hello js user , ${this.name}`);
}
console.log(jsUser.greetingTwo());






 

