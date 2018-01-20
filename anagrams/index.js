function anagrams(stringA, stringB) {
    strA = stringA.replace(/[^\w]/g, "").toLowerCase()
    strB = stringB.replace(/[^\w]/g, "").toLowerCase()
    var charsA = {}
    var charsB = {}
    var counter = 0
    for(let char of strA) {
        charsA[char] = charsA[char] + 1 || 1
    }
    for(let char of strB) {
        charsB[char] = charsB[char] + 1 || 1
    }

    Object.keys(charsA).sort()
    Object.keys(charsB).sort()
    
    if (Object.keys(charsA).length === Object.keys(charsB).length) {
        Object.keys(charsA).forEach(key => {
            if(charsA[key] === charsB[key]) {
                counter = counter + 1
            }
        });
        if (counter < Object.keys(charsA).length) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

module.exports = anagrams;

