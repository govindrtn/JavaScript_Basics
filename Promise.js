// function job(){
//     return new 
//     Promise (function(resolve,reject){
//         reject();
//         // resolve();
//     })
// }
// let promise = job();

// promise.then(function(){
//     console.log("success 1");
// })
// .then(function(){
//     console.log("success 2");
// })
// .then(function(){
//     console.log("success 3");
// })
// .catch(function(){
//     console.log("error 1");
// })
// .then(function(){
//     console.log("success 4");
// })



// ---------------------------------------------------------


// const newPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello")

//     },300);
// })

// newPromise.then(value=>{
//     return value + " world"
// })
// .then(value=>{
//     console.log(value);
// })
// .catch(error => {console.log(error);})

// ---------------------------------------------------


let userData = [
    {name: "Govind" , email: "govind@gmail.com"},
    {name: "Sachin" , email: "sachin@gmail.com"},
]

// function getUsers(){
//     console.log("Getting data......");
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve(userData)
//         },2000)
//     })
// }
// const promise = getUsers();

// promise.then((users)=>{
//     console.log(users);
//     console.log("Done")
// })



let success = true;

function getUsers(){
 return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(success){
            resolve(userData)
        }
        else{
            reject("sorry failed to the user list")
        }
    },1000)
 })   
}

function onResolved(users){
    console.log(users);
}
function onRejected(users){
    console.log(users);
}

const promise = getUsers()
promise.then(onResolved, onRejected);