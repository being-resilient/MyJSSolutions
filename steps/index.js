function steps(n) {
    var steps_arr = []
    var index = 0
    if (n === 1) {
        console.log('#')
    } 
    else 
    {
        for(var i = 1; i <= n; i++) 
        {
            var steps_str = ''
            for(var j = 1; j <= i; j++) 
            {
                steps_str = steps_str + '#'    
            }
            for(var k = i; k < n ; k++) 
            {
                steps_str = steps_str + ' '
            }
            steps_arr[index] = steps_str
            index = index + 1
        }
        for(let step of steps_arr) 
        {
            console.log(step)
        }
    }
    
}



module.exports = steps;
//steps(2)