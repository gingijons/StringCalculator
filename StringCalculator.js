function add (number){
    if(number == "")
        return 0;
    
    if(number.includes("," || " " || "n"))  
    {
        var numberArray = number.split(/,| |n/)
        var total = 0;
        for(var i=0; i < numberArray.length ; i++){
            total += parseInt(numberArray[i]);
        }
        return total;
    }  
    else
        return parseInt(number);
}

module.exports = add;