function reverseInt(n) {
    num_str = n.toString().split('').reverse().join('')
    num_reversed = parseInt(num_str)
    if (n >= 0) {
        return num_reversed
    } else {
       return -(num_reversed)
    }
    
}

module.exports = reverseInt;
