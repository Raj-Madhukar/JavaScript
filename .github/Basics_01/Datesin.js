/*
****************************
*****      Dates       *****
****************************
*/
let mydate=new Date()
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.getMonth());// In javascript month started with 0 hence month will be 1 less than the current
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);//object

// let created_date=new Date(2023,0,12)
// let created_date=new Date(2023,0,12,5,30)
let created_date=new Date("10-11-2025")//month/day/year
// console.log(created_date.toDateString());
// console.log(created_date.toLocaleString());

/* ****************************
******* TimeStamp  ************
***************************** */


let myTimeStamp=Date.now()
// console.log(myTimeStamp)// comes in miliseconds from starting jan to current
// console.log(created_date.getTime());
// console.log(Math.floor(Date.now()/1000));
// console.log(myTimeStamp.toLocaleString());
// console.log(created_date.getDay());

let newdate=new Date();
console.log(newdate.getFullYear());
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());
console.log(newdate.getMinutes());
console.log(newdate.getHours());
console.log(`Toady ${newdate.getDay()} of ${newdate.getMonth()} and year ${newdate.getFullYear()} `);