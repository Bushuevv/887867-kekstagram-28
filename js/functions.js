const isLessOrEqual = (string, length) => string.length <= length;

console.log(isLessOrEqual('проверяемая строка', 20))

const checksPalindrome = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  console.log(reverseString);
  return tempString === reverseString;
};

checksPalindrome('Лёша на полке клопа нашёл');


const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber('2023 год');
console.log(extractNumber('2023 год'));

const myPadStart = (string, minLenght, pad) => {
  const actualPad = minLenght - string.length;

  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart('qwerty', 4, '0');
console.log(myPadStart('q', 4, 'werty'));
