const billInput = prompt("Enter the check sum:");
const tipInput = prompt("Enter the tip percentage:");

if (billInput === null || tipInput === null) {
  alert("Canceled.");
} else {
  const bill = Number(billInput);
  const tip = Number(tipInput);
  console.log(typeof bill);
  console.log(typeof tip);

  if (bill <= 0 || tip < 0 || tip > 100) {
    alert("Invalid input data");
  } else {
    const tipAmount = (bill * tip) / 100;
    const totalSum = bill + tipAmount;

    alert(`Check sum: ${bill}`);
    alert(`Tip: ${tip}%`);
    alert(`Tip amount: ${tipAmount}`);
    alert(`Total sum to pay: ${totalSum}`);
  }
}
