//Destructing 

//Array (caranya, ambil sebagian item, deklarasii & assigment terpisah, default value, rest operator)
// let age; 
const arrPerson = ['Ge', 'Feibe', 20, false, "Manembo-Nembo"];

//caranya 
// const firstName = arrPerson[0];
// const lastName = arrPerson[1];
// const age = arrPerson[2];
// const isMarried = arrPerson[3];
// const [firstName, lastName, age, isMarried] = arrPerson;

//ambil sebagian item 
// const [, , age] = arrPerson;

// console.log(age);


//deklarasi & assignment terpisah 
// [, , age] = arrPerson;

// console.log(age);

//default value 
// let [, , age, isMarried, address ="Bitung"] = arrPerson;

// console.log(age, isMarried, address);

//rest operator 
// let [firstName, lastName, ...rest] = arrPerson;

// console.log(firstName, lastName);
// console.log(rest);

//objek (caranya,  ambil sebagian item, deklarasii & assigment terpisah, default value, rest operator, penerapannya )
//caranya

// let firstName, lastName;
const objPerson = {
    firstName: "Ge",
    lastName: "Feibe",
    age: 20,
    isMarried: false,
    address: "Manembo-Nembo",
};

// const firstName = objPerson.firstName;
// const lastName = objPerson.lastName;
// const age = objPerson.age;
// const isMarried = objPerson.isMarried;

// const { firstName, lastName, age, isMarried} = objPerson;

// console.log(firstName, lastName, age, isMarried);

//ambil sebagian item 
// const { age : umur } = objPerson;

// console.log(umur);

//deklarasi & assignment terpisah 
// ({firstName, lastName} = objPerson);
// console.log(firstName, lastName);

//default value
// ({firstName, lastName, address = "Bitung"} = objPerson);
// console.log(firstName, lastName, address);

//rest operator
// let {firstName, lastName, ...rest } = objPerson;
// console.log(firstName, lastName, rest);


//penerapannya 
const display = ({firstName, lastName}) =>`Hello nama saya ${firstName} ${lastName}`;

console.log(display(objPerson));