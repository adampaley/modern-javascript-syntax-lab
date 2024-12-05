/* Array.prototype.map() */

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const nums2 = nums.map(num => num*2)
console.log(nums2)

/* Array Destructuring */

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [firstTopping, secondTopping] = pizzaToppings
console.log(firstTopping)
console.log(secondTopping)

/* Object Destructuring */

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here

const { make, model } = car
console.log(make)
console.log(model)

/* Applying the Spread Operator on Arrays */

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']; // same as above

// Your code here

const controversialPizzaToppings = [...pizzaToppings]
console.log(controversialPizzaToppings)