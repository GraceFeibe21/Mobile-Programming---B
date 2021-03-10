//Array Exercises

let people = ["Greg", "Mary", "Devan", "James"];

//Nomor 1
for (let g = 0; g<people.length; g++){
    console.log(people[g]);
}

//Nomor 2
people.forEach(function(item){
    console.log(item);
});

//Nomor 3
people.shift();
console.log(people);

//Nomor 4
people.pop();
console.log(people);

//Nomor 5
people.unshift("Matt");
console.log(people);

//Nomor 6
people.push("Grace");
console.log(people);

//Nomor 7
for (let j=0; j<people.length; j++){
    console.log(people[j]);
    if(people[j] === "Mary"){
        break; 
    }
}

//Nomor 8
let newpeople = people.slice(2);
console.log(newpeople);

//Nomor 9 
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//Nomor 10
let withBob = people.concat("Bob");
console.log(withBob);


//Object Exercises
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


//Nomor 1
programming.languages.push("Go");
console.log(programming);

//Nomor 2
programming["difficulty"] = 7;
console.log(programming);

//Nomor 3
delete programming.jokes;
console.log(programming);

//Nomor 4
programming.isFun = true;
console.log(programming);

//Nomor 5
programming.languages.map (function(item, index){
    console.log(item, index);
})