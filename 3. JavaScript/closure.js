//closure ---------- previous state ko reset nhi krta haii
// lexical environment
//ye nested fn h 
// function greet(){
//     let a = 10;
//     function Inner(){
//         console.log(a)
//       }
//       return Inner;
// }
// let result = greet()
// result()
// console.log(result);
//----------------------------------------------------------------
// nested fn hai pr-------- closure nahi hai qki inner fn a ko access nhi krrha 
// function one(){
//     let a=10;
//     function two(){
//         console.log(a) // agr "hello" hota to closure nhi h---- pr "a" hota to proper closure nhi hai pr closure ka nature hai
//     }
//     two()
// }
// one()
// har nested fn closure nhi ho skta lekin har ek closure is a nested fn*

// function counter(){
//     let count = 0;
//     return function inner(){
//         count++
//         console.log(count);
        
//     }
//     inner();
// }
// let counterA = counter();
// counterA()
// counterA()
// counterA()

// let counterB = counter()
// counterB()
// counterB()
// counterB()
// counterB()
//------------------------------------------------------------------
//cart type system banana hai jisme uski ek total value rhegi uske inner fn ko return krwana hai w only one variable
function cart(){
    let total = 60;
    function inner(){
        total++;
        console.log(total);
    }
    return inner();
}
let total = cart();
total()