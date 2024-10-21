//STEP 1
function halfNumber(n) {
    let res = !isNaN(n) ? n / 2 : undefined;
    console.log(`Half of ${n} is ${res}.`);
    return res;
}
//STEP 2
function squareNumber(n) {
    let res = !isNaN(n) ? n ** 2 : undefined;
    console.log(`The result of squaring the number ${n} is ${res}.`);
    return res;
}
//STEP 3
function percentOf(percent, n) {
    let res = !isNaN(percent) && !isNaN(n) ? (percent / 100) * n : undefined;
    console.log(`${res} is ${percent}% of ${n}.`);
    return res;
}
//STEP 4
function findModulus(m, n) {
    let res = !isNaN(m) && !isNaN(n) ? n % m : undefined;
    console.log(`${res} is the modulus of ${m} and ${n}.`);
    return res;
}

//STEP 5
function sumOfNumbers() {
    let input = prompt("Enter numbers separated by commas:");

    let numbers = input?.split?.(",").map?.((num) => parseFloat(num.trim()));

    let sum = 0;

    if (numbers) {
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        console.log("The sum of the numbers is: " + sum);
    }

}
