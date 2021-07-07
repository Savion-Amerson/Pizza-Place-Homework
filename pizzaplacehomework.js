let pizzaPlace = "Savi's Pizza";
let numberOfToppings = 9;

console.log(`Hello, welcome to ${pizzaPlace} ${typeof pizzaPlace}! Savor the best pizza in town, customized with any of our ${numberOfToppings} ${typeof numberOfToppings} toppings of your choosing!`);

if (numberOfToppings < 10){
  console.log("Quality, no quantity.");
}
else
{
  console.log("A whole lof of pizza.");
};

//BONUS CHALLENGE

numberOfToppings = 0
while (numberOfToppings < 10){
  numberOfToppings = numberOfToppings + 1;
  if (numberOfToppings % 2 == 0){
    console.log(numberOfToppings);
  }
};
