
// gold spot / 31.10348(troyounce)
const troyOunce = 31.10348
const goldSpot = 1600

const weightInGrams = 5.4
const stone = 0.4

const priceOfGoldPerGram = goldSpot/troyOunce

const tenCarat = priceOfGoldPerGram *.4167

result = tenCarat * 5.4


// console.log(priceOfGoldPerGram) 

// Step 1 is spot/troy ounce. gives you current price per gram of gold.
// Step 2 is to multiply price per gram by corresponding karat value (10k is .4167)
// Step 3 multiply the result of step 2 by the amount of grams of said gold

// repeat steps 2-3 for sample pile of each karat type (14k, 18k, 22k, etc.)

// This will give market value of said gold

// features to add to application:
// -auto refresh(setInterval?) from external source current spot price to build calculations from in realtime
// -auto generate offer percentages
// -log transactions and keep track of profits

