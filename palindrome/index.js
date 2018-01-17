function palindrome(str) {
    str_reversed = str.split('').reverse().join('')
    return str === str_reversed
}

module.exports = palindrome;
