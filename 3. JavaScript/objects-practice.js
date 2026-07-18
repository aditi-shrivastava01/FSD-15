// ==========================================================================================
// // practice que1
// const student = {
//     name: "Rahul",
//     age : 20,
//     course: "JavaScript",
//     marks: 78,
// };

// // 1. display students name
// console.log(student.name);
// // 2. update marks to 90
// student.marks =90
// console.log(student.marks);
// // 3. add a new property city with the value "indore"
// student.city = "Indore"
// console.log(student.city);
// // 4. remove the course property
// delete student.course

// // 5. display the updated student object
// console.log(student);
// ==========================================================================================

// practice2
// const employee = {
//     name : "Rohit",
//     salary : 30000,
//     dept : "HR",
// };
// // 1. display employee curr salary
// console.log(employee.salary);
// // 2. update salary to 40000
// employee.salary = 40000
// // 3. add a new prop email
// employee.email = "rohit123@gmail.com"
// // 4. remove the dept property
// delete employee.dept;
// // 5. add a method greet that prints : heello rohit
//     employee.greet= function greet(){
//         console.log(`hello ${this.name}`);
//     }
// // 6. call the method
// employee.greet();

// ==========================================================================================

// // practice3
// const movie = {
//     "movie-name" : "KFG",
//     rating : 9,
//     language : "hindi"
// };

// // 1. display movie name using bracket notation
// console.log(movie["movie-name"])
// // 2. update rating to 10
// movie.rating = 10;
// console.log(movie.rating)
// // 3. add new property hero
// movie.hero = "Ranbir Kapoor"
// console.log(movie.hero)
// // 4. remove language property 
// delete movie.language
// // 5. display final object
// console.log(movie);

// ===========================================================================================

// // practice4
// const user = {
//     userName : "Aman",
//     theme : "light",
//     language : "English"
// };

// // 1. display the current theme using variable target
// let target = "theme";
// console.log(user[target]);
// // 2. change theme to dark
// user.theme = "dark";
// // 3. add a new property fontSize
// user.fontSize = "18pt"
// // 4. display the updated properrty 
// console.log(user);

// ======================================================================================

// // practice5
// const account = {
//     accHolder : "shivam",
//     balance : 10000
// };

// // 1. add a method ShowBalance()
// account.showBalance = function showBalance(){
//     console.log(`current balance is ${this.balance}`);
// }
// // 2. it should print current balanace is 10000
// account.showBalance();
// // 3. update balance to 15000
// account.balance = 15000
// // 4. call method again. explected o/p : current balance is 15000
// account.showBalance = function showBalance(){
//     console.log(`current balance is ${this.balance}`);
// }
// account.showBalance();

// ======================================================================================

// // practice6
// const laptop = {
//     brand : "Dell",
//     price : 65000,
//     ram: "16GB"
// };

// // display all the property using object destructuring
// let { brand , price , ram } = laptop;
// console.log(brand);
// console.log(price);
// console.log(ram);

// =========================================================================================

// // practice7
// const student = {
//     name : "Aman",
//     age : 21,
//     email : "aman@gmail.com"
// };

// // 1. display the students name
// console.log(student.name);
// // 2. update students age
// student.age = 22
// console.log(student.age);
// // 3. add a new property course
// student.course = "PCM"
// console.log(student.course);
// // 4. remove the email property
// delete student.email
// // console.log(student);
// // 5. add a method introduce()
// student.introduce = function introduce(){
//     console.log(`Hi, I am ${this.name}.`);
// }
// // 6. call the method -----expected o/p : hi, I am Aman.
// student.introduce();
// // 7. use object destructuring property to extract name and age 
// let { name, age} = student;
// console.log(name);
// console.log(age);