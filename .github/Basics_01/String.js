const name = "Tony stark"
const age=50
console.log(name+" "+age+ " Better AVS");
console.log(`Hello my name is ${name} and age may be ${age} and I am AVS`);

const GameName=new String("Chess");//declaration of string 
console.log(GameName);
console.log(name.length);// 10 "Tony Stark"
console.log(name.charAt(1));//o
console.log(name.toUpperCase());//TONY STARK
console.log(name.indexOf('o'));//1

const newstring=name.substring(0,4)
console.log(newstring)// Tony
 //trim remove the enpty spaces in between the character like you working with the 
 // project and email datafield contain the spaces and you want to remove the space then you use the trim
 // like I take one example works on white spaces line terminators
 let str1="  Abdul kalam   "
 console.log(str1)
 console.log(str1.trim())

 //replace 
 let str2="Vivek2nand"
 console.log(str2.replace("2","a"))//Vivekanand
 console.log(str2.includes("nand"))//true