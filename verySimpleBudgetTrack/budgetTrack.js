const fname=prompt("Enter your firstname: ");
const lname=prompt("Enter your lastname: ");
//string concatenation
const fullName=fname+' '+lname;
console.log('My Wallet, A Budget Tracking App');
console.log('Hello, '+fullName.toUpperCase());
//Manage Total Income and Expenses
let totalIncome=parseFloat(prompt("Total Income: "));
let n=parseInt(prompt("Enter how many expenses: "));
let dictionary={};
let totalExpenses=0;
for(let i=0;i<n;i++)
{
    let expName=prompt("Enter expense name: ");
    let expValue=parseFloat(prompt("Enter expense value: "));
    dictionary[expName]=expValue;
    totalExpenses += dictionary[expName];
    //or you can
    //totalExpenses +=expValue;
}
//console.log(dictionary);
//console.log(totalExpenses);
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
//if you use conditional statement instead of if-else if-else condition
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
