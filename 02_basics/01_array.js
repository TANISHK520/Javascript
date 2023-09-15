/*different type of element allowed , resizeable also */
/*
copy operation creates shallow copy[same reference (changes refferer in original array)]
deepcopy->do not shares same reference

*/
const myArr=[0,1,2,3,4,5,"tanish"];
console.log(myArr);
console.log(myArr[0]);
console.log(myArr[6]);

const myHeroes=["shaktiman","naagraj","ironman"]
const myArr2=new Array(1,2,3,4,"tanish")
console.log(myHeroes);
console.log(myArr2);
console.log(myArr2.length);

/*Methods:: */
const arr=[1,2,3];
arr.push(4)
arr.push(5)
console.log(arr);
arr.pop()
console.log(arr);

arr.unshift(4)
/*unshift add at first position , to add at first move all by 1 position thatswhy not good*/
console.log(arr);

arr.shift();
/*shift remove from first*/
console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(9));
console.log(arr.indexOf(2));


const newArr=arr.join()
/*join convert array to string with , between*/
console.log(arr);
console.log(newArr);
console.log(typeof arr);
console.log(typeof newArr);
console.log(newArr[0]);
console.log(newArr[1]);

/**********slice splice*********** */

const a1=[1,2,3,4,5,6]
const s1=a1.slice(1,4); /* 1 to 4-1 index tk*/
console.log(a1);
console.log(s1);

const sp=a1.splice(1,4) /*1 to end index tk*/
console.log(a1);
console.log(sp);
/*
note; Main difference is due to slice there is no change in original array but due to splice there is change in original array
*/


