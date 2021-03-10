//1.callback
function mandi(){
    console.log("Mandi");
}
mandi();

function sarapan(callback){
    setTimeout(()=>{
        console.log("Sarapan tertunda 3 detik");
        callback();
    }, 3000);
}
sarapan(berangkatSekolah);

function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}


//2. Promise
function helloWorld() {
    return helloWorld = new Promise((resolve) => {
            resolve("Hello World");
    })
};

let messsages = async () => {
    try{
        const msg = await helloWorld();
        setTimeout(() => {
            console.log(msg);
        },2000);
    }
    catch(error)
    {
        console.log(error);
    }
    };
messsages()

//3. Fetch
// function ambilDataUSer(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((user) => console.log(user))
// };
// ambilDataUSer();
