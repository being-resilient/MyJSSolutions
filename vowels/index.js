function vowels(str) {
    var red_str = str.replace(/[^\w]/g, '').toLowerCase()
    var counter = 0
    for(let char of red_str) {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            counter = counter + 1
        }
    }
    return counter
}

module.exports = vowels;
