let myDate=new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());


/*in thus below syntax month start from 0 thatis 0->jan*/
let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toString());

let myCreatedDate1=new Date(2023,1,23)
console.log(myCreatedDate1.toString());

let myCreatedDate3=new Date(2023,0,23,5,3)
console.log(myCreatedDate3.toString());

let myCreatedDate4=new Date(2023,0,23,5)
console.log(myCreatedDate4.toString());

let myCreatedDate5=new Date(2023,0,23,5,3,13)
console.log(myCreatedDate5.toString());


/*month-date-year in htis 1->jan*/
let myCreatedDate6=new Date("01-14-2023")
console.log(myCreatedDate6.toString());

let timeSTamp=Date.now()
console.log(timeSTamp.toString());
console.log(myCreatedDate6.getTime());

// date.now() gives time in millisecond lets convert ot sec

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit",
    timeZoneName:"long",
}))





