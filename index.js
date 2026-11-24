const billInput = prompt("Enter the check sum:");
const tipInput = prompt("Enter the tip percentage:");

if (billInput === null || tipInput === null) {
  alert("Canceled.");
} else if (billInput.trim() === "" || tipInput.trim() === "") {
  alert("Invalid input data");
} else {
  const bill = Number(billInput);
  const tip = Number(tipInput);

  if (
    Number.isNaN(bill) ||
    Number.isNaN(tip) ||
    bill <= 0 ||
    tip < 0 ||
    tip > 100
  ) {
    alert("Invalid input data");
  } else {
    const tipAmount = (bill * tip) / 100;
    const totalSum = bill + tipAmount;

    alert(
      `Check sum: ${bill.toFixed(2)}\n` +
        `Tip: ${tip}%\n` +
        `Tip amount: ${tipAmount.toFixed(2)}\n` +
        `Total sum to pay: ${totalSum.toFixed(2)}`,
    );
  }
}
