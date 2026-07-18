//1. Remove extra spaces from both ends
// let str = "    JavaScript     ";
// let res = str.trim();
// console.log(res);

//2. convert the string to uppercase 
// let str = "coding thinker";
// let upper = str.toUpperCase();
// console.log(upper);

//3. print total no. of characters in string 
// let str = "JavaScript";
// console.log(str.length);

//4. check weather email contains @ if yes print valid email else invalid email
// let mail = "aditi@gmail.com";
// let check = mail.includes("@");
// if(check){
//     console.log("valid email")
// }
// else{
//     console.log("invalid email")
// }

//5. check weather string start with good
// let message = "Good morning everyone";
// let msg = message.startsWith("Good");
// console.log(msg);

//6. check weather the file is a pdf
// let fileName = "resume.pdf";
// let pdf = fileName.endsWith("pdf");
// console.log(pdf);

//7. replace java with Javascript
// let sentence = "I Love Java";
// let msg = sentence.replace("Java","JavaScript");
// console.log(msg);

//8. replace every cat w lion
// let sent = " cat dog cat bird cat";
// let msg = sent.replaceAll("cat","lion");
// console.log(msg);

//9. extract only the username
// let email = "demo@gmail.com";
// let user = email.split("@")[0];
// console.log(user);

//10. extract only the domail name
// let email = "lavinsh@gmail.com";
// let domain = email.split("@")[1];
// console.log(domain);

//11. convert string into array
// let fruits = "Apple, Mango, Banana, Kiwi"
// let str = fruits.split("fruits");
// console.log(str);

//12. count total no. of spaces
// let sentence = "I Love JavaScript very much ";
// let count =0;
// for(let i =0; i< sentence.length; i++){
//     if(sentence.charAt(i) == " "){
//         count++;
//     }
// }
// console.log(`total spaces are ${count}`);

//13. reverse string without using reverse()
// let str = "JavaScript";
// let rev = "";
// for( let i = str.length-1 ; i>=0; i--){
//     rev += str.charAt(i);
// }
// console.log(rev);

//14. count total no. of vowels
// let str = "JavaScript Programminng";
// let vowels = "AEIOUaeiou";
// let count = 0;
// for( let i=0; i<str.length; i++){
//     let char = str.charAt(i);
//     if(vowels.includes(char)){
//         count++;
//     }
// }
// console.log(`Total vowels are ${count}`);

//15. count how many time g appears
let str = "pragramming";
let count = 0;
for( let i = 0; i < str.length; i++){
    if( str[i] == "g"){
        count++;
    }
}
console.log(count);
