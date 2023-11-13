
// mutable:objet ,array, map , sets
// immutable: string , numbers,boolens

const name = "hitesh"
name[1]='u'
const repoCount = 50

console.log(name + repoCount + " Value");


// use this syntax good
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

let gameName = new String('hitesh-hc-com')

//string are immutable therefore ant do below task
// gameName[0]='9'
// gameName="tanish"
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName)
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('%20'))
console.log(url.includes('sundar'))

const game="tanish-kapoor-hello"
console.log(game.split("-"))
console.log(game)
let neww=game.split('-')

// split convert into array (mutale)
console.log(neww)
neww[0]="rtt"
console.log(typeof neww)
console.log(neww)