// const person = {
//     firstName: "Ge",
//     lastName : "Pikirang",
//     age: 20,
// };

// person.firstName="feibe";
// person.address= "Bitung";

// console.log(person);


// let kalimat = 
// "Hello, nama saya" +
// person.firstName+
// " " + 
// person.lastName +
// ". Umur saya "+ 
// person.age + 
// "tahun.";

// let kalimat2 = `Hello nama saya ${person.firstName} ${person.lastName}`;
// console.log(kalimat);


//Arrow function 

//Function declaraion 
// function sayHello(){

// }
// //function ekspression
// const sayHello2 = function (){};

// const sayHello3 = (param1, param2 = "Feibe") => `Hello ${param1} ${param2}`;


// console.log(sayHello3("Ge", "Pikirang"));


//rest parameter 
// const display = (...params) => {
//     console.log(params);
// };

// display(1,2,3,4,5,6,7);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [8,9];
// const newArr = [...arr1];
const combineArr = arr1.concat(arr2.concat(arr3));
const combineArr6 = [...arr1, ...arr2, ...arr3];

console.log(combineArr6);

const person = {
    firstName: "Ge",
    lastName : "Pikirang",
    age: 20,
};



// person.address = "Bitung";
// person.job="Mahasiswa";

person = {
    ...person, 
    address: "Bitung",
    job: "Mahasiswa",
};


const obj1 = 
console.log(person);