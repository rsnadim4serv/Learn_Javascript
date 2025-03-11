const fname=prompt("Enter your firstname: ");
const lname=prompt("Enter your lastname: ");
//string concatenation
const fullName=fname+' '+lname;
console.log('My Wallet, A Budget Tracking App');
console.log('Hello, '+fullName.toUpperCase());
//Manage Total Income and Expenses
let totalIncome=parseFloat(prompt("Total Income: "));
let rent=parseFloat(prompt("Rent: "));
let groceries=parseFloat(prompt("Groceries: "));
let transport=parseFloat(prompt("Transport: "));
let entertain=parseFloat(prompt("Entertain: "));
let others=parseFloat(prompt("Extra or Others expenses: "))
//calculate the expenses
let totalExpenses=rent+groceries+transport+entertain+others;
//tax deduction(12% of income)
let tax=totalIncome*0.12;
//Net income after giving tax
let netIncome=totalIncome-tax;
//balance after expenses
let Balance=netIncome-totalExpenses;
//Savings (25% of remaining balance)
let savings=Balance*0.25;
//Current Balance after savings
let curBalance=Balance-savings;
//Show My Wallet Report
console.log('Total Income: $'+totalIncome);
console.log('Tax deduction(12% of totalIncome): $'+tax);
console.log('Net Balance after tax: $'+netIncome);
console.log('Total Expenses: $'+totalExpenses);
console.log('Current Balance after expenses: $'+Balance)
console.log('Savings : $'+savings);
console.log('Current balance after savings : $'+curBalance);
