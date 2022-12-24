/** Task: 1
 * implement factorial algorithm using for, while, do..while operators
 * assign the result to corresponding variable
 * for -> forFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * while -> whileFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * do..while -> doFactorial: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while
 */
let forFactorial, whileFactorial, doFactorial;
const n = 10; // 10! = 3628800
let i = 1;
let j = 1;
forFactorial = 1;
whileFactorial = 1;
doFactorial = 1;

for (let i = 1; i <= n; i++) {
  forFactorial *= i;
}

while (i <= n) {
  whileFactorial *= i;
  i++;
}

do {
  doFactorial *= j;
  j++;
} while (j <= n);

/** Task: 2
 * return the concatenated string from an array of substring
 * assign the result to variable 'str'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
let str = '';
const substr = ['I', ' love', ' JS'];
for (let el of substr) {
  str += el;
}

/** Task: 3
 * calculate a total of income of certain person
 * assign the result to the variable 'totalIncome'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */
let totalIncome = 0;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300,
};

for (let key in personIncomes) {
  totalIncome += personIncomes[key];
}

module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome,
};
