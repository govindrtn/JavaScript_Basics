// --------------------------------- >>>>>> Arrow Function <<<<<<< --------------------


// let sum = function (a, b, c) {
//     return a + b + c;
// }
// console.log(sum(1,1,2))

// let sum = (a,b,c)=>{return a+b+c;}
// // console.log(sum(1,2,3));

// let sum1 = (a,b,c)=>a+b+c;
// let double = (a) => a*2
// console.log(sum1(4,5,6),double(3));


// ------------------------- >>>>>> Template Literals <<<<<<< --------------------

// var title = "hello "
// var name = "Raj"
// before ES6
// console.log("we welcome " + title + name); 

// console.log(`we welcome ${title }${name} ${name}`);



// ------------------------- >>>>>> Default Parameter <<<<<<< ------------------

// let fun1 = function(a,f=2.5,g=9.5){
    // g = 9.8 is a default parameter
    // return a*f
// }
// console.log(fun1(10));


// ------------------------- >>>>>> Rest Parameter <<<<<<< ------------------
// let numbers = [1,2,3,4,5,6]

// function sum (num){
//     let total = 0
//     for(let n of num){
//         // console.log(n);
//         total += n;
//     }
//     return total
// }
// console.log(sum(numbers));


// let sum1 = function(...nums) {
//     // console.log(nums);
//     total = 0
//     for (let n of nums){
//         // console.log(n);

//         total += n
//     }
//     return total
    
// }
// console.log(sum1(1,2,3,4,5))


// let max = function(...nums) {
//     console.log(nums);
//     return nums    
// }
// console.log(` greater number is ${Math.max(prompt("enter a number"),(prompt("enter second number")
// ,(prompt("enter third number"))))}`);


// ------------------------- >>>>>> Spread opertator <<<<<<< ------------------

// let person = {name:"Govind" ,age:24}
// let address = {city:"mumbai", pin:464661}

// let p1 = {...person,...address}
// // p1.name = "x"
// console.log(person);
// console.log(p1);


// ------------------------- >>>>>> Classes  <<<<<<< ------------------

// class person {
//     constructor(givenName,giveLastname,givenAge){
//         this.name = givenName
//         this.lastname = giveLastname
//         this.age = givenAge
//     }
// }
// let person1 = new person("Ajay","Nath",2)
// console.log(person1);

// class person {
//     constructor(givenName,giveLastname,givenAge){
//         this.name = givenName
//         this.lastname = giveLastname
//         this.age = givenAge
//     }
    
// }
// let person1 = new person("Ajay" , "maithil" ,65)
// console.log(person1.name , person1.lastname , person1.age);


// ------------------------- >>>>>> Object Litrals  <<<<<<< ------------------

// before  
// var person = {
//     name:"Govind",
//     age: 24,
//     phone: 86032443526
// }
// console.log(person.name);
// console.log(person.age);


// after ES6

let name = "Sachin"
let age = 24
let phone = 8878257808

let person = {
    name,
    age,
    phone,
    city:"mumbai"
}
console.log(person.name);

