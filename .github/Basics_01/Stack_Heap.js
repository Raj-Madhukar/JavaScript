//Stack(In primitive type ) nd Heap(In non primitive type) Memory 
//Stack copy the content in a container but heap contain the actual value which references the original value it contains
let myname="Arjun"
let anotherName=myname
anotherName="Math and CS"
console.log(myname);
console.log(anotherName);

let userOne={
    email:"user@123.com",
    upi:"user@one"
}

let usertwo={
    email:"usertwo@1242",
    upi:"user@two"
}
let userThree=userOne //taking original value of user one his email and upi. it reference to userOne 

userThree.email="arjun@google.com"
console.log(userOne.email);
console.log(userThree.email);