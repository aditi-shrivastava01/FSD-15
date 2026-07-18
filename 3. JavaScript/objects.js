// let studentName = "aditi";
// let studentAge = 20;
// let studentemail = "aditi@gmail.com";

// let student = {
//     studentName : "aditi",
//     studentAge : 20,
//     studentemail : "aditi@gmail.com",
// };
//access krna hai  // syntax = objectname.key
// console.log(student.studentAge);

//agr age modify krna hai
// student.studentAge = 30;
// console.log(student);

//adding the property
// console.log(student);
// student.course = "MERN";
// console.log(student);

//delete //syntax: delete objectName.property
// delete student.course
// console.log(student);
// ----------------------------------------------------------------------------------------------------


// let myself = {
//     Name : "ADITI",
//     Age : 21,
//     RollNumber : 006,
//     Email : "aditi@gmail.com",
//     city : "bhopal",
//     state : "Madhya Pradesh"
// };
// console.log(myself.Name);
// console.log(myself.Age);
// console.log(myself.RollNumber);
// console.log(myself.Email);
// console.log(myself.city);
// console.log(myself.state);
// console.log(myself);
// delete myself.city
// console.log(myself);

//agr do ke beech mai space ho to [] bracket laga ke access krna haoi
// let myself = {
//     "full Name" : "ADITI SHRIVASTAVA",
//     Age : 21,
//     "Roll Number" : 006,
//     Email : "aditi@gmail.com",
//     city : "bhopal",
//     state : "Madhya Pradesh"
// };
// console.log(myself["full Name"]);
// console.log(myself["Roll Number"])
// // modify
// myself["full Name"] = "Ananya Sharma"
// console.log(myself);

// //delete
// delete myself["Roll Number"]
// console.log(myself);

// //add
// myself["eye colour"] = "brown"
// console.log(myself);

//ek aur case banta hai bracket notation ka kisi property ko variable bana ke store krna hai

// let target = "full Name"
// // console.log(myself.target); //isse undefined ayega
// console.log(myself[target]);

// functions use krke
// variable case
// let myself = {
//     "full Name" : "ADITI SHRIVASTAVA",
//     Age : 21,
//     "Roll Number" : 6,
//     Email : "aditi@gmail.com",
//     greet: function(){
//         console.log(`hello ${this["full Name"]}`);
//         console.log(`hello ${this.Email}`);
//     },
// };

// myself.greet();

//ES6n shorthand
// let myself = {
//     "full Name" : "ADITI SHRIVASTAVA",
//     Age : 21,
//     "Roll Number" : 6,
//     Email : "aditi@gmail.com",
//     sayhello(){
//         console.log(`hello students`);
//     },
// };
// myself.sayhello();


//arrrow function agr object ke andr method hai to arrow fn use mt krna //isme ans undefined ayega
// let myself = {
//     "full Name" : "ADITI SHRIVASTAVA",
//     Age : 21,
//     "Roll Number" : 6,
//     Email : "aditi@gmail.com",
//     greet: () =>{
//         console.log(`hello ${this["full Name"]}`);
//         console.log(`hello ${this.Email}`);
//     },
// };

// myself.greet();


let student = {
    studentName : "aditi",
    studentAge : 20,
    studentemail : "aditi@gmail.com",
};

//without destructuring
console.log(student.studentName);
console.log(student.studentAge);
console.log(student.studentemail);

//with destructuring  // property ka name same hina chahiye (name badal skte hai par badalte nhi hai)
let { studentName, studentAge, studentemail} = student;
console.log("===================================================");
console.log(studentName);
console.log(studentAge);
console.log(studentemail);

//name change kr skte hai par aase krte nahi hai 
// let { studentName:x, studentAge, studentemail} = student;
// console.log("===================================================");
// console.log(x);
// console.log(studentAge);
// console.log(studentemail);
