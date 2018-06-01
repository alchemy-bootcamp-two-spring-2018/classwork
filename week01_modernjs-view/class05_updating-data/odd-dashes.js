
const isOdd = char => char % 2 === 1;

function insertDashed(number) {
  const digits = number.toString();

  let result = '';

  for(let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    const currentIsOdd = isOdd(digit);

    const prevDigit = digits[i - 1];
    const prevIsOdd = isOdd(prevDigit);

    if(currentIsOdd && prevIsOdd) result += '-';

    result += digit;
  }

  return result;
}

console.log(insertDashed(15347564))


function insertDashed2(number) {
  const digits = number
    .toString().split('');

  return digits
    .map((digit, i) => {
      const currentIsOdd = isOdd(digit);
      const prevIsOdd = isOdd(digits[i - 1]);
      return currentIsOdd && prevIsOdd ? '-' + digit : digit;
    })
    .join('');

  return result;
}

console.log(insertDashed2(15347564))


