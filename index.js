
const reverseString = document.getElementById('reverseInput');
const palindromeString = document.getElementById('palindromeInput');
const amount = document.getElementById('amountInput');
const tip = document.getElementById('tipPercentageInput');
const Button = document.getElementById('button');

reverseButton.addEventListener('click', () => {
    const userInput = reverseString.value;
    const reversedString = reverseAString(userInput);
    document.getElementById('output1').innerHTML = 'Reversed String: ' + reversedString;
});

palindromeButton.addEventListener('click', () => {
    const userInput = palindromeString.value;
    if (isPalindrome(userInput)){
        document.getElementById('output2').innerHTML = 'Yes, the input string is Palindrome';
    } else{
        document.getElementById('output2').innerHTML = 'No, the input string is not Palindrome';
    }
});

amountButton.addEventListener('click', () => {
    const bill = parseInt(amount.value);
    const tipPercentage = parseInt(tip.value);
    const total = getTotalAmount(bill, tipPercentage);
    document.getElementById('output3').innerHTML = 'Your Total Amount to be paid is $' + total;
})

function reverseAString(str) {
    return str.split('').reverse().join('');
};

function isPalindrome(inputString) {
    const inputList = inputString.split(' ')
    for(i in inputList) {
        const reversedStr = reverseAString(inputList[i]);
        console.log(reversedStr)
        if (inputList[i] != reversedStr){
            return false;
        };
    };
    return true;
};

function getTotalAmount(bill, tipPercentage) {
    const TotalAmount = bill + bill * (tipPercentage*0.01);
    return TotalAmount;
}