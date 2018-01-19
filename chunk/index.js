function chunk(array, size) {
    var start = 0
    var end = size
    var l_arr = array.length
    var chunks = []
    var index = 0
    while(start < l_arr) {
        chunks[index] = array.slice(start, end)
        start = start + size
        end = start + size
        index = index + 1
    }
    return chunks
}

module.exports = chunk;
