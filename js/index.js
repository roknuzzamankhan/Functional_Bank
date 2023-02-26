function depositAndWithdraw(inputFieldId, displayAmountId, isTrue) {
  const inputAmount = document.getElementById(inputFieldId); //inputField
  const inputAmountFloat = parseFloat(document.getElementById(inputFieldId).value); //inputField-Float
  const displayAmount = document.getElementById(displayAmountId); //displayAmount
  const displayAmountFloat = parseFloat(document.getElementById(displayAmountId).innerText); //displayAmount-Float
  const updateBalance = document.getElementById("displayBalance"); //displayBalance
  const updateBalanceFloat = parseFloat(document.getElementById("displayBalance").innerText); //displayBalance-Float

  if (inputAmount.value == "") { //if input nothing
    alert("Please input your amount");
    displayAmount.innerText = displayAmountFloat;
  } else if (isNaN(inputAmountFloat)) { //if input any string
    alert("Please input your number of amount");
  } else if (inputAmountFloat >= 0) { //if input amount >=0
    displayAmount.innerText = displayAmountFloat + inputAmountFloat;


    //update balance section  --  Start
    if (isTrue == false && updateBalanceFloat <= 0 || isTrue == false && inputAmountFloat > updateBalanceFloat) { //if you want to withdraw greater then your balance amount
      inputAmount.value = "";
      alert("You have insufficient Balance");
      displayAmount.innerText = displayAmountFloat;
    } else if (isTrue == true) { //if you deposit amount
      updateBalance.innerText = inputAmountFloat + updateBalanceFloat;
    } else if (isTrue == false) { //if you withdraw amount
      updateBalance.innerText = updateBalanceFloat - inputAmountFloat;
    }
    //update balance section  --  End


  } else { //if you input negative amount
    alert("Please Use Positive Number, Money can't be negative");
  }

  inputAmount.value = ""; //clearing the inputField Value
}

//Deposit button clicked for deposit amount
document.getElementById("depositButton").addEventListener("click", function () {
  depositAndWithdraw("depositAmountInput", "displayDeposit", true);
});

//Withdraw button clicked for withdraw amount
document.getElementById("withdrawButton").addEventListener("click", function () {
  depositAndWithdraw("withdrawAmountInput", "displayWithdraw", false);
});