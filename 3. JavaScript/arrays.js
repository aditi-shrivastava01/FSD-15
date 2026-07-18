// variableName ArrayName = []

let animals = ["lion" , "tiger" , "bear" , "dog" , "cat"]
//                0        1         2       3       4    

// mujhe agr koi bhi value ko access krna hai for that i use index // index always start from 0

// let newName = animals[1];
// console.log(newName);

// //mixed array
// let arr1 = [ 1, "hello" , true];
// console.log(arr1);


// array methodss

// //1. PUSH()                        ArrayName.push() -----------------> add the value in the last of the array
// console.log(animals);
// animals.push("horse");
// console.log(animals);

// // 2. UNSHIFT()                   ArrayName.unshift() ----------------> starting mai add krna hai toh unshift use krte
// console.log(animals);
// animals.unshift("horse");
// console.log(animals);

// // 3. POP()                       ArrayName.pop() ------------------> use to delete from last
// console.log(animals);
// animals.pop();
// console.log(`after delete`, animals);

// 4. SHIFT()                        ArrayName.shift() ---------------> use to delete value from 0th index
console.log(animals);
animals.shift();
console.log(animals);