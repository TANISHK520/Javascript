const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]


/*
push do stuff on exixting array
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
console.log(marvel_heroes[3]);
console.log(marvel_heroes[3][0]);
*/



/*concat return new array  and original array remains same */
const newarr=marvel_heroes.concat(dc_heroes)
console.log(newarr);


/*using this below approach we can merge multilple array elements*/
/*also return new array , [...___,...___,...___,any no of array] */
const all_NewHeroes=[...marvel_heroes,...dc_heroes]
console.log(all_NewHeroes);


const another_array=[1,2,3,[4,5,6],7,[6,7],[4,5]]
const useable_another_array=another_array.flat(Infinity) /*infinity is depth here  */
console.log(useable_another_array);

/**note */
console.log(Array.isArray("Tanish"));
console.log(Array.from("Tanish"));

console.log(Array.from({name:"tanish"})); /*specify what to array*/


/*important*/
let score1=100
let score2=109;
let score3=55
console.log(Array.of(score1,score2,score3));










