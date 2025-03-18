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

if(savings>=1000){
    financialStatus='Excellent, savings so well!';
}
else if(savings>=500 && savings<1000)
{
    financialStatus='Good, savings are quite good';
}
else if(savings>=100 && savings<500)
{
    financialStatus='Need improvement, try your best';
}
else if(savings<100)
{
    financialStatus='Critical, give more and more hard work';
}
//let saving=450;
//let financial = saving>=1000 ? 'Excellent' : saving>=500 && saving<1000 ? 'Good' : saving>=100 && saving<500 ? 'Need Improvement' : saving<100 ? 'Critical' : 'Warning';
//console.log(financial);
let overSpending='';
if(totalExpenses>totalIncome)
{
    overSpending='Warning, expenses are greater than total income';
}

//Show My Wallet Report
console.log('Total Income: $'+totalIncome);
console.log('Tax deduction(12% of totalIncome): $'+tax);
console.log('Net Balance after tax: $'+netIncome);
console.log('Total Expenses: $'+totalExpenses);
console.log('Current Balance after expenses: $'+Balance)
console.log('Savings : $'+savings);
console.log('Current balance after savings : $'+curBalance);
console.log('\nFinancial Status\n'+financialStatus);
if(overSpending)
{
    console.log(overSpending);
}
