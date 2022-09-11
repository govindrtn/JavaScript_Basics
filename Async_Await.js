// let userData1 = [
//     {name: "Govind" , email: "govind@gmail.com"},
//     {name: "Sachin" , email: "sachin@gmail.com"},
// ]

// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(userData1)
//     },4000)
// })

// async function func1(){
//     let result = await promise;
//     console.log(result);
// }
// func1()
 
// -------------------------------------------

let userData = [
    {name: "Govind" , email: "govind@gmail.com"},
    {name: "Sachin" , email: "sachin@gmail.com"},
]

let success = false;

let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        if(success){
        resolve(userData)
        }
        else{
            reject("failed to the user list....")
        }
    },4000)
})

async function func2(){
   try{
    let result = await promise;
    console.log(result);
   }
   catch(error){
    console.log(error);
   }
}
func2()