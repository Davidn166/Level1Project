// Declares the variables and sets the value of each to zero
let pennyCount = 0;
let nickelCount = 0;
let dimeCount = 0;
let quarterCount = 0;

// Function changes the amount of coins for each depending on what's the coin type or whether it's adding or subtracting. Also checks to make sure the coin count doesn't go below zero for each.
function updateCoinCount(coinType, add) {
  if (add) {
    coinType++;
  } else {
    if (coinType > 0) {
      coinType--;
    }
  }
  return coinType;
}

// Function updates the text content of each elemnet with the current counts of each coin type
function updateDisplay() {
  document.getElementById("pennyCount").textContent = pennyCount;
  document.getElementById("nickelCount").textContent = nickelCount;
  document.getElementById("dimeCount").textContent = dimeCount;
  document.getElementById("quarterCount").textContent = quarterCount;

  // Sets the value of each coin's value and rounds it to two decimal places.
  const pennyValue = (pennyCount * 0.01).toFixed(2);
  const nickelValue = (nickelCount * 0.05).toFixed(2);
  const dimeValue = (dimeCount * 0.1).toFixed(2);
  const quarterValue = (quarterCount * 0.25).toFixed(2);

  // Calculates how much each amount of coins are worth for each type.
  const totalValue = (
    pennyCount * 0.01 +
    nickelCount * 0.05 +
    dimeCount * 0.1 +
    quarterCount * 0.25
  ).toFixed(2);

  // Sets the text content of the element with each respective ID to their appropiate value.
  document.getElementById("pennyValue").textContent = `$${pennyValue}`;
  document.getElementById("nickelValue").textContent = `$${nickelValue}`;
  document.getElementById("dimeValue").textContent = `$${dimeValue}`;
  document.getElementById("quarterValue").textContent = `$${quarterValue}`;
  document.getElementById("totalValue").textContent = `$${totalValue}`;
}

// Senses when each button is clicked and calls the appropriate function when needed to.
document.getElementById("addPenny").addEventListener("click", function () {
  pennyCount = updateCoinCount(pennyCount, true);
  updateDisplay();
});
document.getElementById("subtractPenny").addEventListener("click", function () {
  pennyCount = updateCoinCount(pennyCount, false);
  updateDisplay();
});
document.getElementById("resetPenny").addEventListener("click", function () {
  pennyCount = 0;
  updateDisplay();
});
document.getElementById("addNickel").addEventListener("click", function () {
  nickelCount = updateCoinCount(nickelCount, true);
  updateDisplay();
});
document
  .getElementById("subtractNickel")
  .addEventListener("click", function () {
    nickelCount = updateCoinCount(nickelCount, false);
    updateDisplay();
  });
document.getElementById("resetNickel").addEventListener("click", function () {
  nickelCount = 0;
  updateDisplay();
});
document.getElementById("addDime").addEventListener("click", function () {
  dimeCount = updateCoinCount(dimeCount, true);
  updateDisplay();
});
document.getElementById("subtractDime").addEventListener("click", function () {
  dimeCount = updateCoinCount(dimeCount, false);
  updateDisplay();
});
document.getElementById("resetDime").addEventListener("click", function () {
  dimeCount = 0;
  updateDisplay();
});

document.getElementById("addQuarter").addEventListener("click", function () {
  quarterCount = updateCoinCount(quarterCount, true);
  updateDisplay();
});
document
  .getElementById("subtractQuarter")
  .addEventListener("click", function () {
    quarterCount = updateCoinCount(quarterCount, false);
    updateDisplay();
  });
document.getElementById("resetQuarter").addEventListener("click", function () {
  quarterCount = 0;
  updateDisplay();
});

// When reset all button is called, the count of each coin is set to zero as well as the printed value.
document.getElementById("resetAll").addEventListener("click", function () {
  pennyCount = 0;
  nickelCount = 0;
  dimeCount = 0;
  quarterCount = 0;
  document.getElementById("totalValue").textContent = "$0.00";
  updateDisplay();
});
updateDisplay();
