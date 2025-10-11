                    /* ***********************************************
                    **************  Arrays   *************************
                    ************************************************ */

//1st- Non primitive data
// array stores the collection of multiple items under a single variable name in square bracket with comma separated value
//Initialization
const myArr=[7,6,true,"Arjun",null]
// console.log(myArr)
// console.log(typeof myArr)
const Arr2=new Array(1,3,4,5,6,7);
// console.log(Arr2)

// indexing 
// console.log(Arr2[0])//1
Arr2.push(9) // push the value 9 at last in Arr2
Arr2.push(10)
// console.log(Arr2)
Arr2.pop()// delete the last inserted value 
// console.log(Arr2)


Arr2.unshift(6)// just like push but insert the value at first
// console.log(Arr2)
Arr2.shift()
// console.log(Arr2)// Just like pop operation but delete first element from the string

// Questionable type
// console.log(Arr2)
// console.log(Arr2.includes(3))
// console.log(Arr2.indexOf(6))

const newArr=Arr2.join()
// console.log(Arr2)
// console.log(typeof Arr2);
// console.log(newArr)
// console.log(typeof newArr);

// const Arr3=Arr2.slice(1,3)
// console.log(Arr3)
// console.log(Arr2)
// const Arr4=Arr2.splice(1,3)
// console.log(Arr4)
// console.log(Arr2)

const IN_fighters=["Bhagat Singh","Chandra Shekhar Azad","Subhas chandra Bose","Mangal Pandey"]
const En_Viceroy=["Lord Canning","John Lawrence","Lytton","Ripon"]

console.log(IN_fighters)
console.log(En_Viceroy)

// let fighters=IN_fighters.concat(En_Viceroy)
// console.log(fighters)

// IN_fighters.push(En_Viceroy)
// console.log(IN_fighters)

const anotherArr=[2,7,[3,6,8],[4,1,[5,9,6]]]
console.log(anotherArr)
console.log(anotherArr.flat(Infinity))


console.log(Array.isArray("Arjun"));
console.log(Array.from("Arjun"))
console.log(Array.from({name:"Arjun"}));

let A1=20
let A2=10
let A3=30
 console.log(Array.of(A1,A2,A3));
