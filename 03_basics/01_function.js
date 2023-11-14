
function sayMyName(){
    console.log("T")
    console.log("A")
    console.log("N")
    console.log("I")
    console.log("S")
    console.log("H")
}

sayMyName()




                        // parameters
                            // |
function addTwoNumber(number1,number2){
    
    console.log(number1+number2)
    let result=number1+number2
    return result
}
addTwoNumber(3,4)
            // |
            //   arguments

const result=addTwoNumber(3,"2")
console.log(`Result is ${result}`)







function loginUserMessage(username="sam"){
    // !username is equivalent to username==undefined , !username used in industry !undefined means true krdo then go to if block
    if(username==undefined){
        console.log("enter username")
        return
    }
    return `${username} just loggedin`
}

console.log(loginUserMessage("tanish"))

// jab kuch pass nahi kia assigned by undefined
console.log(loginUserMessage())
// note:::
// if username="sam" , if pass nothing then print sam just loggedin . if wala never get executed






console.log("multiple argument in function")

// ...rest and spread operator :depend upon use case we call it rest or spread
// here ... means rest operator :argument kaafi hai , baandh do ek array me
function cart(...num1){
    return num1
}
console.log(cart(200,300,400))



function cart(val1,val2,...num1){
    return num1
}
console.log(cart(200,300,400,500,600))






const user={
    username:"tanish",
    location:"pune"
}

function handleObject(anyobject){
    return `username is ${anyobject.username} and location is ${anyobject.location}`
}

console.log(handleObject(user))

// direct pass object in function and function have generic defination
console.log(handleObject({
    username:"hitest",
    location:"india"
}))






const myarr=[1,2,3,4]
function printSec(anyarr){
    return anyarr[1]
}
console.log(printSec(myarr))
console.log(printSec([4,5,6]))








