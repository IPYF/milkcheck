//This is a program about having the appropriate amount of milk based on what we know about consumption.

var milkNeeded = 0;
var milkStock = prompt("How many cartons of milk do you currently have?");
var dayWeek = prompt("Thanks for that. What day of the week is it?");

//Obv. there's heaps of milk here for any situation. No action needed.
if (milkStock >= 5) {
  console.log("You probably have too much milk. Check again in a few days.")
}

//Here's the bit where the days tell me how much milk to get.
//Nobody is home on Tu, Wed, Thu so only one carton is the most that would be used ever.
if (dayWeek === 'Tuesday' || dayWeek === 'Wednesday' || dayWeek === 'Thursday'){
  milkNeeded = 1
}
//Deb is home on Monday and Friday and drinks heaps of tea. You definitely need 2 total cartons.
else if (dayWeek === 'Monday' || dayWeek === 'Friday'){
  milkNeeded = 1.5
}
//Both of us drink coffee on the weekend. Ideally you'd want 2 cartons on either day to be sure.
else if (dayWeek === 'Saturday' || dayWeek === 'Sunday') {
  milkNeeded = 2
}

//I wanted this to kill the program is you didn't type in a valid weekday. Doesn't work...
if (milkNeeded === 0) {
  console.log("You either didn't enter a weekday or a valid amount of milk cartons. Try again")
}

//Here's the finish bit but it's clunky.
if (milkNeeded === milkStock) {
  console.log("You have " + milkStock + " cartons and because it is " + dayWeek + " you need " + milkNeeded + '.' + " You have enough milk.")
}
else if (milkNeeded > milkStock) {
  console.log("You have " + milkStock + " cartons and because it is " + dayWeek + " you need " + milkNeeded + '.' + " You need to buy milk.")
} 
else if (milkNeeded < milkStock && milkNeeded !== 0) {
  console.log(milkNeeded)
  console.log("You have " + milkStock + " cartons and because it is " + dayWeek + " you need " + milkNeeded + '.' + " You have more than enough milk!")
}

