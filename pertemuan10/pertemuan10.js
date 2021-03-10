//Asyncronous JavaScript

// console.log("satu");
// console.log("dua");
// console.log("tiga");


//callback
// function greetings(fullname){
//     console.log(`Hi ${fullname}`);
// }

// function introduction (firstname, lastname, callback){
//     const fullname = `${firstname} ${lastname}`;
//     callback(fullname);
// }

// introduction(`Ge`, `Feibe`, (fullname) => {
//     console.log(`Hi ${fullname}`);
// });

// console.log("satu");
// setTimeout(()=> {
//     console.log("dua");
// }, 2000);
// console.log("tiga");

// function proses1(){
//     console.log('Proses 1 selesai dijalankan')
// }

// function proses2(callback) {
//     setTimeout(()=> {
//         console.log('Proses 2 selesai dijalankan')
//         callback();
//     }, 2000);
// }

// function proses3 () {
//     console.log('Proese 3 selesai dijalankan')
// }

// proses1();
// proses2(proses3);


//callback hel kata 
// setTimeout(()=>{
//     console.log("Proses 1");
//     setTimeout(()=> {
//         console.log("Proses 2");
//         setTimeout(()=>{
//             console.log("Proses 3");
//             setTimeout(()=>{
//                 console.log("Proses 4");
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);


//promise
// let condition = true;
// function newpromise (){
//     return newpromise = new Promise((resolve, reject)=> {
//     if (condition){
//         resolve("Berhasil");
//     }else {
//         reject ("Error");
//     }
// });
// }

// newpromise().then((result)=>{
//     return result;
// }).then ((result2)=> {
//     console.log(`${result2} !!!`);
// }).catch((error) => {
//     console.log(error);
// })


function getIdStudent(){
    return new Promise((resolve, reject)=>{
        resolve("12345");
    });
}

function getNameById (id){
    return new Promise((resolve, reject) => {
        if(id ==="123456"){
            resolve("Ge");
        }else {
            reject("Unknown ID Student");
        }
    });
}

// getidstudent().then((id) =>{
//     getnamebyid(id).then 
//     ((name) => {
//         console.log(name);
//     }).catch((error)=>{
//         console.log(error);
//     });
// });


//passing await
const getNameByIdAsync = async() =>{
    try {
        const id = await getIdStudent();
        const name = await getNameById(id);
        console.log(name);
    } catch (error) {
        console.log(error);
    }
};

getNameByIdAsync();