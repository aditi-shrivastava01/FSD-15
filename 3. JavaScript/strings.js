const secreatMessage = "WELCOME TO THE CODING ADVENTURE";
const phrase = "JavaScript, Python, RubyGo";


//1. get just the first 7 letters from secreatMEssage (after trimming)  //trimming spaces hatata hai first aur end se
// let message = secreatMessage.trim().slice(0,7); //(0.7) 7 isliye qki last count ni hota
// console.log(message);

//2. get the last 9 letters from secreatMessage (after trimming)
// let message = secreatMessage.trim().slice(-9);
// console.log(message);

//3. extract letters from position 11 to 14
// let message = secreatMessage.trim().slice(11, 14);
// console.log(message);

//4. break the phrases into separate pieces wherever you see a comma
// let res = phrase.split(",") //pura array deta hai split (string ko array bana deta hai)
// console.log (res);

//5. find at what position the word "TO" starts in secreatMEssage
// let pos = secreatMessage.indexOf("TO");
// console.log(pos);

//6. find at what position the word "CODING" starts from last
// let pos = secreatMessage.indexOf("CODING");
// console.log(pos);

//7. check secretMessage contains "ADVENTURE"
// let search = secreatMessage.includes("ADVENTURE");
// console.log(search);

//8. secreat message begins with welcome
let check = secreatMessage.startsWith("WELCOME");
console.log(check);