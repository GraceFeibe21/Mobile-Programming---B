//export 
const fullname ="Ge Feibe";
const person ={
    firstName:"Ge",
    lastName:"Feibe",
    age: 20,
};


const display = ({firstName, lastName}) =>{
    console.log(`Hello ${firstName} ${lastName}`);
};
 
//export
export {fullname, person, display};