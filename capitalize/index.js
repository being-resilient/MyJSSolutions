function capitalize(str) {
    var str_arr = str.split(' ')
    var capitalized_str = ''
    for(let word of str_arr) {
        var index = 1
        var length = word.length
        var new_word = word[0].toUpperCase()
        if(length > 1) {
            while(index < word.length) {
                new_word = new_word + word[index]
                index = index + 1
            }
        }
        capitalized_str = capitalized_str + new_word + ' '
    }
    return capitalized_str.slice(0, -1)
}

module.exports = capitalize;
//console.log(capitalize("i love breakfast at bill miller bbq"))
