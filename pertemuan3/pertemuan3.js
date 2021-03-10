// console.log("Hello world");
// console.log("Welcome to Mobile Programming class!");

let hello = "Hello world!";  // klo let bisa diganti
hello = "Welcome";

// const age = 21;   //klo const tidak bisa diganti (ato fix data)
let age = 19;
age += 1;

let namadepan = "ge";
let namabelakang = "feibe";
let namalengkap = namadepan + " " + namabelakang + ". Usia saya adalah " + age;

let alamat = "manembo-nembo";

console.log(hello);
console.log(age);
console.log(alamat);
console.log(namalengkap);

console.log(10 == "10");  // Loose equality
console.log(10 === "10");  // strict equality


let angka = 10;
let hasil = angka % 2 === 0 || true ? "Genap" : "Ganjil";
console.log(hasil);


// single line comment

/*
        multi line comment
        multi line comment
*/

//Function declaration
function ucapkansalam(){
    return "Selamat Sore ini function declaration";
}
console.log(ucapkansalam());

//Function expression
const ucapkansalam2 = function(){
    console.log("selamat seore ini function expression");
}
ucapkansalam2();