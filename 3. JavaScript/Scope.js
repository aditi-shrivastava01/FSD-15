// 1. Global scope ------------ variables ko kahi pr bhi access kr skte hai
// 2. functional scope -------- function ke andar access kr skte hai
// 3. block scope  ------------ "var" --> o/p deta hai, "let" aur "const" --> error
// 4. modular scope
//---------------------------------------------------------------------------------------------------
// 1. global scope (global m variable("let", "const", "var") ko kahi pr bhi access kr skta hai)

// const a=10;
// function greet (){
//     console.log(a);
// }
// greet();

//----------------------------------------------------------------------------------------------------
// 2.functional scope (only function ke andr access krta hai)

// function greet (){
//     var a=10;
//     console.log(a); ----------------yaha hoga to error nhi ayega
// }
// greet();
// console.log(a);------------------ agar yaha likhogy to error ayega qki a function ke andr jo bhi variable declare krengy usko wahi 
// pr access kr skte haioutside function nahi access kr skte aur na hi kisi dusre function ke andr

//----------------------------------------------------------------------------------------------------
// 3. block scope (only block {} ke andr access kr skte hai)
// "var" block ko respect nhi krta hai "let" aur "const" isko respect krte hai 
//  var mai hamko value mil jati hai let aur const m error ajata hai 

// {
//     var a=20;
// }
// console.log(a); //20

// if(true){
//     var a=50;
// }
// console.log(a);
// -------------------------------------------------------------------------------------------------------------
// //closure
// function greet(){
//     let a = 10;
//     function Inner(){
//         console.log(a)
//       }
//       return Inner;
// }
// let result = greet()
// // result()
// console.log(result);
