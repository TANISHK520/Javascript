// this->current context
const user={
    username:"tanish",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
        /*{
                username: 'tanish',
                price: 999,
                welcomeMessage: [Function: welcomeMessage]
            }
        */
    }

}
user.welcomeMessage()
console.log(this.username)
console.log(this)  /*here current context is {}*/
user.username="kapoor"
user.welcomeMessage()
/*in browser console.log(this) is window object but here we are in node environment thatswhy here current context is empty class */





function chai(){
    let usernmame="hitesh"
    console.log(this.username)  /*->undefined only works when its object*/
    console.log(this)
}
/*inside a function in node enviremonent current context is as we see in terminal */
chai()

console.log("--------------------------------------");

const chai2=function(){
    console.log(this)
    let usernmame="hitesh"
    console.log(this.username)  /*->undefined only works when its object*/

}
chai2()

console.log("--------------------------------------")



/*declare function using arrow function */
const chai1=() =>{
    let usernmame="hitesh"
    console.log(this.username)  /*->undefined only works when its object*/
    console.log(this)
}
chai1()

/*NOTE:diffenence is current context in nomral function is something but in arroe function it empty object {}*/




const add2=(num1,num2) => {
    return num1+num2
}
console.log(add2(1,2))


/*this technique ued in react*/
const add3=(num1,num2) => num1+num2
console.log(add3(1,2))


const add4=(num1,num2) => (num1+num2)
console.log(add4(1,2))


/*to return object , it must in ()paranthesis */
const add5=(num1,num2) => ({username:"tanish"})
console.log(add5(1,2))



