var recipe = {
  floor: {
    quantity: 200,
    unit: 'g'
  },
  sugar: {
    quantity: 150,
    unit: 'g'
  },
  butter: {
    quantity: 125,
    unit: 'g'
  },
  milk: {
    quantity: 125,
    unit: 'g'
  },
  eggs: {
    quantity: 2,
    unit: 'units'
  },
  vanillaEssense: {
    quantity: 1,
    unit: 'teaspoon'

  },
  salt: {
    quantity: 0.5,
    unit: 'teaspoon'

  },
  bakingPowder: {
    quantity: 2,
    unit: 'teaspoon'
  }
}

console.log(recipe);

var hackRecipe = function (ingredient, quantityToAdd) {
    recipe[ingredient]["quantity"] += quantityToAdd;
    var unit = recipe[ingredient].unit;

    console.log(quantityToAdd +" "+ unit+" "+"added to "+ ingredient + ".")
    console.log(recipe);
}

hackRecipe("milk", 10);

var toAdd = {
    g: 10,
    ml: 15,
    teaspoon: 1,
    unit:1
}
function hackRecipeFaster(ingredient) {
    var unit = recipe[ingredient].unit;
    var quantityToAdd = toAdd[unit];
    recipe[ingredient]["quantity"] += quantityToAdd;
    console.log(quantityToAdd +" "+ unit+" "+"added to "+ ingredient + ".")
    console.log(recipe);
}
