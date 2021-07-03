const number_input = document.getElementById("number");
const select_type = document.getElementById("type");

var selectType = "prime";
var inputNumber;

function validateNumber(number) {
  const intNumber = parseInt(number);
  if (!intNumber) return 0;
  else if (intNumber < 0) return 1;
  return Math.round(intNumber);
}

number_input.addEventListener("input", (e) => {
  inputNumber = validateNumber(e.target.value);
  calculateNumber();
});

select_type.addEventListener("change", (e) => {
  selectType = e.target.value;
  calculateNumber();
});

function calculateNumber() {
  const resultTest =
    selectType === "prime" ? isPrime(inputNumber) : isFibonacci(inputNumber);
  updateResult(resultTest);
}

function isFibonacci(number, count = 1, last = 0) {
  if (count < number) {
    return isFibonacci(number, count + last, count);
  }
  if (count === number) {
    return true;
  }
  return false;
}

function isPrime(number) {
  const sqrtNum = Math.floor(Math.sqrt(number));
  let prime = number != 1;
  for (let i = 2; i <= sqrtNum; i++) {
    if (number % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function updateResult(result) {
  document.getElementById("result").innerHTML = result;
}
