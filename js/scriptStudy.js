

let num = 210;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num)
}

showFirstMessage('Hello!');

console.log(num)

function calc(a, b) {

    return (a + b);
}

console.log(calc(10, 5));
console.log(calc(10, 8));
console.log(calc(95, 5));

function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();

console.log(anotherNum);

const logger = function () {
    console.log('Hello!')
};

logger();

const calc = (a, b) => a + b;



const usdCurr = 29;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {

    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr)
promotion(res);


function returnNeighboringNumbers(a, b) {
    let result = '';

    if (typeof b !== 'number' || b <= 0) {
        return a;
    }
    for (let i = 1; i <= b; i++) {
        if (b === i) {

            result += a * i;

        } else {

            result += a * i + '---';
        }
    }
    return result

}

console.log(returnNeighboringNumbers(2, '5'))


const str = 'teSt';
const arr = [1, 2, 4];

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str);


const fruit = 'Some fruit'

console.log(fruit.indexOf('q'));


const logg = 'Hello world';

console.log(logg.slice(6, 11));

console.log(logg.substring(-6, 11));

console.log(logg.substr(6, 5));

