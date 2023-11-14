// let var const
// use let and const support scope




// two ways of declaring function.
// 1.can call before declare work fine
console.log(addone(2))
function addone(num1){
    return num1+1
}

// 2.cant call befroe Declaration
// console.log(addtwo(2)) yaha error aayga.
const addtwo=function(num){
    return num+2
}
console.log(addtwo(2))
