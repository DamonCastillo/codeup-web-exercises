"use strict"
console.log("Hello from external JavaScript")

alert("Welcome to My Website :)");
let userFavoriteColor = prompt("What is your favorite color?");

alert(" Great! my favorite color is also " + userFavoriteColor);
let dailyCost = prompt("What is the daily cost for a movie?");
let rentLength = prompt("How long will you be renting?");
let finalCost = dailyCost * rentLength
alert("Awesome your total is $" + finalCost)
// Company Exercise
let googlePay = prompt("How much does Google pay an hour?")
let amazonPay = prompt("How much does Amazon pay an hour?")
let facebookPay = prompt("how much does Facebook pay an hour?")
let googleHours = prompt("How many hours did you work at Google this week?")
let amazonHours = prompt("How many hours did you work at Amazon this week?")
let facebookHours = prompt("how many hours did you work at Facebook this week?")
let weeklyCheck = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours)
alert("Your incoming check is $" + weeklyCheck)
//Student Exercise
let isClassFull = confirm(" Is the class full?")
let isConflict = confirm(" Does it conflict with your schedule?")
let Enrolled = (!isClassFull && !isConflict)
alert(Enrolled)
// Product
let isPremium = confirm("Are you a premium member?")
let amountBought = parseInt("How items did you buy?")
let isExpired = confirm("Has the offer passed?")
let offerApply = (isPremium || amountBought > 2 && !isExpired)
alert(offerApply)