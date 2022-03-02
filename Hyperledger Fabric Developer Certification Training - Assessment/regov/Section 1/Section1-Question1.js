function Start (n) {
    var ttlMultiple = 0;
    var ttlAddition = 0;
    var result;
    var firstMultiply = true;

    for (let i = 1; i < n; i++) { //i = 1 to follow sequence 100,99,98,97 for equation (n × (n − i)) × ... × 3 × 2 × 1) = (n × (n − 1)) × ... × 3 × 2 × 1)
        if(firstMultiply === true){ //first multiply must start with 100 (n = 100)
            ttlMultiple = parseInt(n * (n - i));
            firstMultiply = false;
        }
        else{
            ttlMultiple = parseInt(ttlMultiple * (n - i));
        }

      }
    
    var splitList = ttlMultiple.toString().split("");  
    
    for (let i = 0; i < splitList.length; i++){
        ttlAddition = ttlAddition + parseInt(splitList[i]);
    }
    result = "Total Addition : " + ttlAddition;

    return result;
}
console.log(Start(100)); //Call function to start program.

