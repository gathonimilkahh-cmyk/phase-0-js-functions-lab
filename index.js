
function calculateTax(amount) {
  return (amount * 0.10)
}

let taxValue = calculateTax(89)
console.log(taxValue)

function convertToUpperCase(text) {
  return text.toUpperCase()
}
console.log(convertToUpperCase("hi"))


function findMaximum(num1, num2) {
  if (num1 > num2) { return num1 }
  else { return num2 }
}

let max = findMaximum(9, 11)
console.log(max)

function isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("")
  return word === reversedWord
}
console.log(isPalindrome("mum"))

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return (originalPrice) - (originalPrice * (discountPercentage / 100))
}

let discount = calculateDiscountedPrice(100, 20)
console.log(discount)



// This is required for the test to function properly
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice }

