const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numbersSet = "0123456789";
const symbolsSet = "~!@#$%^&*()_+<>?:{}|.,";

//selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

function getRandomData(dataSet) {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
  //   console.log(dataSet);
}

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numbersSet);
  }
  if (symbolsInput.checked) {
    password += getRandomData(symbolsSet);
  }
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }
  passBox.innerText = truncateString(password, totalChar.value);
};

generatePassword();

document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
