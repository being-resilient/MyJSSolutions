function maxChar(str) {
    var arr = str.split('')
    var count = []
    var new_count = []
    var index = 0
    while(index < arr.length) {
        if (!count[arr[index]]) {
            count[arr[index]] = 1
        } else {
            count[arr[index]] = count[arr[index]] + 1
        }
        new_count[index] = count[arr[index]]
        index = index + 1
    }
    return Math.max(...new_count)
}

module.exports = maxChar;
