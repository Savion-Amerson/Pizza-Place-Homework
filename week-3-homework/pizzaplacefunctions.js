// TODO Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = ["bacon", "pepperoni", "mushroom", "sausage"];
// let toppingAmt = pizzaToppings.length

// TODO Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
function greetCustomer(){
    let greetString = `Welcome to Pizza House, our toppings are: `;
    for(let topping of pizzaToppings){
        greetString += `${topping}, `;
    }
    console.log(`${greetString}.`)
    // for (i=0; i<toppingAmt; i++){
    //     greetString = greetString + `${pizzaToppings[i]}, `

    //         console.log(greetString);

    // }
}

greetCustomer();
// TODO Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs  prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
 function getPizzaOrder (size, crust, ...toppings) {
     let order = `One ${size} ${crust} crust pizza with `;
     for( let topping of toppings) {
         order += `${topping}, `
     }
     console.log(`${order} ... coming up!`);
return [size, crust, toppings ]
 }
 let customersOrder = getPizzaOrder("large", "Thin", "bacon", "pepperoni", "mushroom", "sausage")

 function preparePizza ([aSize, aCrust, listToppings ]){
     console.log("...cooking pizza...");
    return {
        size: aSize,
        crust: aCrust,
        toppings: listToppings
    }
 }

 let cookedPizza = preparePizza(customersOrder);

 function servePizza(pizza){
    let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
    for(let topping of pizza.toppings){
        orderReady += `${topping}, `
    }
    console.log(`${orderReady} ...Enjoy!`);
    return pizza
 }

 servePizza(cookedPizza);