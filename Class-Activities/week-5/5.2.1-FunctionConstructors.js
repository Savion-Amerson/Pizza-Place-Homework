// create an object literal 


const animal = {
    name: "Rudy",
    age: 3.14,
    typeOfAnimals: "Marsupial",
    hobbies: ["bake pie", "catching balls", "Sleeping"],
    bio: `${this.name} is ${this.age} years old and loves ${this.hobbies}`, bakesale(){
        console.log(`welcome to ${this.name}'s bakesale`)
    }
}

// include a method that uses "this"


// create a function in the global scope that prints "this"
function logThis() {
    console.log("this is: ", this);
}
console.log(logThis());