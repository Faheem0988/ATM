#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 3366;
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("correct pin code!!!");

  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "please select options",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);
  if (operationAnswer.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      { name: "amount", message: "enter your amount", type: "number" },
    ]);
    myBalance -= amountAns.amount;

    console.log("Your remaining balance is: " + myBalance);
  } else if (operationAnswer.operation === "check balance") {
    console.log("Your balance is:" + myBalance);
  }
} else {
  console.log("Incorrect your pin code");
}
