/************************************************************************
**************************************//Arrays//*************************
*************************************************************************/

/*Arrays in JavaScript are a fundamental data structure used to store multiple values in a single variable. 
They can hold various data types and allow for dynamic resizing. 
Elements in an array are accessed by their index, starting from 0.*/
// Array methods push, pop, shift, unshift, slice ,splice, concat, map, filter .....
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// TWO ways to declare an array
//1st 
const myArr=[1,3,5,7,9]
// console.log(myArr)
// // 2nd
// const myArr2=new Array(1,4,6,9,3)
// console.log(myArr2);

// //Array methods
// myArr.push(5)//[1,3,5,7,9,5]
// myArr.push(6)//push at the end of array and it very to handle the data just add them at end of array
// myArr.pop()// remove last element inserted
// console.log(myArr);

// myArr.unshift(5)//place the element at the front 
// myArr.unshift(4)
// myArr.shift()// remove first element
// console.log(myArr)

// //asking some question
// console.log(myArr.includes(5));//true
// console.log(myArr.indexOf(3));
// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr)// converted to string value
// console.log(typeof newArr)//string

// console.log("A:",myArr)//[1,3,5,7,9]
// const mynA=myArr.slice(1,4);
// console.log("B:",mynA);//[3,5,7]
// console.log(myArr)//[1,3,5,7,9]
// const myn2=myArr.splice(1,4);
// console.log("D:",myn2);//[3,5,7,9]
// console.log("C:",myArr);//[1]


const mynewArr=[4,5,6,7]
const myArr2=myArr.concat(mynewArr)
console.log(myArr2)