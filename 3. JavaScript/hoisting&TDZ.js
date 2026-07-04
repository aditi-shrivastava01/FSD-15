
// "var", "let", "const" teeno hoist hote hai, lekin "var" ke case m variable ko declare karne se pehle access karne par undefined return hota hai, jabki "let" aur "const" ke case m error aata hai.
// declaration upr jati hai tab hoisting error aata hai ("let" aur "const" ke case m) console.log(a); 
// ReferenceError: Cannot access 'a' before initialization
// temporary dead zone (TDZ) ka concept hai, jisme variable ko declare karne se pehle access karne ki koshish karte hai to error aata hai.
//let se banaya function bhi TDZ 
//------------------------------------------------------------------------------------------------------------------------------------------------------

// greet();
// var greet  = function(){
//     console.log("hello");
// }
// var ke case m greet is not a function ayega qki undefined hai, lekin let ke case m ReferenceError: Cannot access 'greet' before initialization ayega qki greet undefined hai

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

