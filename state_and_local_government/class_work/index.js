let balance = 1000000;
const transfer = () => {
  const amount = parseInt(document.getElementById("amount").value);
  const AccountStatus = document.getElementById("status").value;
  const output = document.getElementById("output");
    let bankRate=0;
    let charges=0;
    if (AccountStatus == "active"){
      output.innerText="Account is active";
      console.log("Account is active")
    }
    else{
      output.innerText="Account is dormant";
      console.log("Account is dormant");
      return;
    };
    if (amount < 100000){
      bankRate = 5;
      charges = amount+bankRate;
      balance = balance - charges;
      // alert(charges);
      output.innerText="total of transfer with charges: " + charges;
      console.log("total of transfer with charges: " + charges + "Balance is: " + balance);
    }
    else {
      bankRate = 5/100
      charges=amount*bankRate + amount;
      // alert(charges);
      output.innerText="total of transfer with charges: " + charges + "Balance is: " + balance;
      console.log("total of transfer with charges: " + charges + "Balance is " + balance);
    }; 
    document.getElementById("output").innerHTML= transfer();
};



// for withdrawal
const withdraw = () =>{
  const Amount = parseInt(document.getElementById("fund").value);
  const bank = document.getElementById("Bank").value;
  const output = document.getElementById("output2");
let baseFee = 20;
let debit = 0;
let mainBank = "first bank"
if(bank != mainBank.trim){
  debit = Amount + baseFee;
  balance = balance - debit;
output.innerHTML="Amount to be debited: " + debit + "Balance is: " + balance;
  console.log("Amount to be debited: " + debit + "Balance is: " + balance);
}
else{
  debit = Amount;
output.innerHTML="Amount to be debited: " + debit + "Balance is: " + balance;
  console.log("Amount to be debited: " + debit + "Balance is: " + balance)
}
document.getElementById("output2").innerHTML=withdraw();
};

// withdraw (3000, "firstBank");




