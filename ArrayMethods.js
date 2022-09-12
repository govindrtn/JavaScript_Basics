// javaScript Arrays Method

// 1.>>> Map() mathod.......

// const arr =[1,2,3,4,5,6,7];
// const mapped = arr.map(function(elememt){
//    return elememt + 30
// });
// console.log(mapped);


// 2.>>> FILTER() METHOD ........

// const arr = [1,2,3,2,4,"4",4,5,6,7,8];
// const filtered = arr.filter(element =>element ==2||element ===4)
// console.log(filtered);

// const arr1 = ["DOG","CAT","ELEPHANT","FISH","HENs"]
// const filtered2 = arr1.filter(pet=>pet.length==4)
// // const filtered3 = arr1.filter(pet=>pet.length==3)
// console.log(filtered2);
// console.log(filtered3);
// const addarr = filtered2.concat(filtered3)
// console.log(addarr);


// 3.>>>SORT() METHOD........

// const arr = [1, 2, 3, 2, 4, 1, 5, 6, 7, 8];
// const alphabet = ["f", "b", "c", "a", "j"]

// // sort in desending Order 
// let descend = arr.sort((a, b) => a < b ? 1 : -1)
// console.log(descend);

// // Sort in Ascending order 
// // let ascend = alphabet.sort((a,b)=>a>b ? 1 : -1)
// let ascend = alphabet.sort(function (a, b) {
//     const arr2 = a > b ? 1 : -1
//     return arr2
// })
// console.log(ascend);

// 4.>>> ForEach() Method .........

// const arr = [1, 2, 3, 2, 4, 1, 5, 6, 7, 8];
// let frEh = arr.forEach(element=>{
//     console.log(element);
// })

// 5.>>>  Concat Method........

// const arr = [1, 2, 3, 4,]
// const arr2 = [ 5, 6, 7, 8]
// const arr3 = [ 9,10,11,12 ]
// const arr4 = arr.concat(arr2,arr3)
// console.log(arr4);

// 6.>>> Every() method.......

// const arr = [1, 2, 3, 2, 4, 1, 5, 6, 7, 8];
// all element are greater then 5 
// const greaterFive = arr.every(function(num){
//     let result =num>5
//     return result
// })
// console.log(greaterFive);

// All element are less than 9
// const greaterNine = arr.every(function(num){
//         let result =num<9
//         return result
//     })
//     console.log(greaterNine);

// 7.>>> Some() Method .........

// const arr = [1, 2, 3, 2, 4, 1, 5, 6, 7, 8];

// // At least one element is greater than 5?
// const greaterNum = arr.some(function (num) {
//     return num >= 5
// })
// console.log(greaterNum);

// // At least one element is less than or equal to 0 ?
// const lessNum = arr.some(num => num <= 0)
// console.log(lessNum);

// 8.>>> includes() Method 

// const arr = [1, 2, 3, 2, 4, 1, 5, 6, 7, 8];
// let includes2 = arr.includes(2)
// console.log(includes2);
// let includes20 = arr.includes(20)
// console.log(includes20);


// 9.>>> Join() Method 

// const arr = [1, 2, 3, 2, 4, 1, 5, 6, 7, 8];
// let joined = arr.join(' ')
// console.log(joined);


// 10. >>>> Reduce() method........

// const arr = [1, 2, 3, 2, 4, 1, 5, 6, 7, 8,4];
// const reduced = arr.reduce(function(total,current){
//     let result = total + current;
//     return result
// })
// console.log(reduced);


// .11>>> Find() Method .........

// const arr = [1, 2, 3, 2, 4, 5, 7, 8, 4];
// const found = arr.find(function (num) {
//     return num > 5
// })
// console.log(found);


// 12>>> Reverse() method.........

// const myPets =  ['Dog',"Cat","Hamster","Tiger","Elephant"];
// let reersed = myPets.reverse()
// console.log(reersed);


// 13.>>>> Push() Method..........

// const myPet =  ['Dog',"Cat","Hamster","Tiger","Elephant"];
// console.log(myPet);
// let mypets2 = myPet.push("banana")
// console.log(mypets2);
// console.log(myPet);

// 14.>>>> Pop() Method......

// const myPets =  ['Dog',"Cat","Hamster","Tiger","Elephant"];
// let poped = myPets.pop();
// console.log(poped);
// console.log(myPets);

// 15.>>>> shift() Method........

// const myPets =  ['Dog',"Cat","Hamster","Tiger","Elephant"];
// const l = myPets.shift();
// console.log(l);
// console.log(myPets);

// 16.>>> Unsift() Method ......

// const myPets =  ['Dog',"Cat","Hamster","Tiger","Elephant"];

// const  l = myPets.unshift("Banana ")
// console.log(l);
// console.log(myPets);

// 17.>>>> splice()method 
// the splice() method returns the removed items(s) in an array 
// the Splice() method changes the orignal array
// the Splice() method can taks n number of argumets  

//                    0     1      2        3    
// const myPets =  ['Dog',"Cat","Tiger","Elephant"];
//                   -4    -3     -2        -1 
// let l = myPets.splice(0,1,"lion")
// console.log("removed items " + l);
// console.log(myPets);


// 18.>>>> Slice() Method
// This method fills the element in an array 
// with a static value and returns the modified array
// and return the selected items in an array, as new array object
// The slice() method doesn't change the orignal Array.

// const myPets1 =  ['Dog',"Cat","Hamster","Tiger","Elephant"];
// let sliced = myPets1.slice(2,5)
// console.log(sliced);
// console.log(myPets1);

// const arr = [1, 2, 3, 2, 4, 5, 7, 8, 4];
// let sliced2 = arr.slice(1,7)
// console.log(sliced2);
// let slicedrev = sliced2.reverse()
// console.log(slicedrev);