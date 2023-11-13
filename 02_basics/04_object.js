const tinderUser=new Object();
/*noe this is silgleton object  */
console.log(tinderUser);

const tinderUser1={

}
console.log(tinderUser1)

// difference in above two are forst one is singleton object and second is non singleton object

 
tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;
console.log(tinderUser);



/*nested object*/
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"tanish",
            lastname:"kapoor",
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"a",
    4:"b",
}
const obj3={obj1,obj2}
console.log(obj3);
/*
{ 
    obj1: { '1': 'a', '2': 'b' }, 
    obj2: { '3': 'a', '4': 'b' } 
}*/


// const obj4=Object.assign(obj1,obj2)
/*changes in obj1 */
// console.log(obj4);
/*{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } */
// console.log(obj1);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj5=Object.assign({},obj1,obj2) /*{} optional but better to use it means now changes will be in {} not in first obj1*/
console.log(obj5);
console.log(obj1);
/*now no change in obj1 as we use {}-->target*/


/*using spread operator*/
const obj7={...obj1,...obj2}
console.log(obj7)
console.log(obj1);







/*when get value from database*/
/*array of objects */
const user=[{
    id:1,
    email:"h@gmail.com",
},
{
    id:2,
    email:"p@gmail.com",
},
{
    id:3,
    email:"f@gmail.com",
}
]

console.log(user[1].email)
console.log(tinderUser);


/*it return array */
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));



/*makes array of array [[key,value],[key,value]] */
console.log(Object.entries(tinderUser));


/*this tell whether that property exists or not */
console.log(tinderUser.hasOwnProperty("name"))
console.log(tinderUser.hasOwnProperty("age"))











/*::destructuring of objects::*/

const course={
    name:"js",
    courseInstructor:"hitesh",
    fee:0,
}
console.log(course.courseInstructor);
console.log(course["courseInstructor"]);

/*defragment : now we can access directly
also we can change name by using */
/*const curly braces=kaha se value exttract krninhai */
const {courseInstructor}=course
console.log(courseInstructor);

/*give easy name*/
const {courseInstructor:instructor}=course
console.log(instructor);




// api in json fomrat
/*
{

}

[
    {},
    {},
    {}
]

*/

