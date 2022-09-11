// example 1 ------------------------------------------

// function greet(name ,callback){
//     console.log("hiii " + name);
//     callback()

// }
// function callback(){
//     console.log("I am call back function......");
// }
// greet("Govind", callback)


// example 2 --------------------------------------------
// let greet = ()=>{
//     console.log("Good Morning.......");
// }

// let sayName =(name) => {
//     console.log("hello " + name);
// }
// setTimeout(greet, 5000)
// sayName('Govind')

// example 3------------------------------------------------
// let greet = (name, myFunc)=>{
//     console.log("Good Morning.......");
//     myFunc(name)
// }

// let sayName =(name) => {
//     console.log("hello " + name);
// }
// setTimeout(greet, 5000 , 'Govind' , sayName)


// example 4 ------------------------------
function isOdd(number){
    return number % 2 == 0;
}
 function filter(numbers,callback){
    let result = [];
    for(let num of numbers){
        if(callback(num)){
            result.push(num);
        }
    }
    return result;
 }
let numbers = [1,2,3,4,5,3,32,5,5,3,3,5]
console.log(filter(numbers, isOdd));
