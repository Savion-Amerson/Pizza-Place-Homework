// refactor your Animal function constructor and methods to use the class keyword

class Animal {
    constructor(name, type, color, weight, age, personality){
        this.name = name;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.age = age;
        this.personality = personality;
        this.bio = `This ${this.personality} ${this.color} ${this.type} is ${this.age} years old, weighs ${this.weight} pounds, and is called ${this.name}.`
    }
    greeting() {
        return "Hello!";
    }
}

// extend the Animal class with a type of animal 
class Cat extends Animal {
    constructor(name, type, color, age, personality, breed){
        super(name, type, color, age, personality);
        this.breed = breed;
    }
    greet() {
        return "MEOW!";
    }
};

// add some unique methods and properties to the class extension


// create an instance of the class extension and call one of its methods
const Garfield = new Cat("Garfield", "Calico", "Orange", 74, "Mutt");

console.log(Garfield);
console.log(Garfield.greet());
console.log(Garfield.bio);