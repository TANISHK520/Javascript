
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

function cart(...num1){
    return num1
}
console.log(cart(200,300,400))




function cart(num2,num3,...num1){
    return num1
}
console.log(cart(200,300,400,500,600))



