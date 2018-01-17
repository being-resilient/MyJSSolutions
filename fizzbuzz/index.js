function fizzBuzz(n) {
    var element = 1
    while(element <= n) {
        if(element % 15 == 0) {
            console.log("fizzbuzz")
        }
        else if(element % 3 == 0) {
            console.log("fizz")
        }
        else if(element % 5 == 0) {
            console.log("buzz")
        }
        else {
            console.log(element)
        }
        element = element + 1
    }
}

module.exports = fizzBuzz;