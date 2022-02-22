
function decimalToBinary(number) {
    const division = parseInt(number / 2);
    return division
}
function getRemainder(number) {
    const remainder = number % 2;
    return remainder
}
// let number = 89;
// let firstRemainder = getRemainder(number);
// let getDivision;
// let remainderArry = [];
// remainderArry.push(firstRemainder);

// console.log(remainderArry)


document.getElementById('convert-btn').addEventListener('click', function () {
    let getInput = document.getElementById('input-field').value;
    const outputField = document.getElementById('output-field');
    if (getInput == "" || getInput < 0) {
        outputField.value = "Please Enter A Valid Value"
    }
    else {
        let firstRemainder = getRemainder(getInput);
        let getDivision;
        let remainderArry = [];
        remainderArry.push(firstRemainder);
        while (getInput != 0) {
            getDivision = decimalToBinary(getInput);
            if (getDivision == 0) {
                break;
            }
            getInput = getDivision;
            let remainder = getRemainder(getDivision);
            remainderArry.push(remainder)
        }
        for (let i = remainderArry.length - 1; i != -1; i--) {

            outputField.value = outputField.value + remainderArry[i];
        }
    }
})
document.getElementById('convert-btn').addEventListener('blur', function () {
    const outputField = document.getElementById('output-field');
    outputField.value = "";
})