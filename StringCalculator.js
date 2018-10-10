function add (number){
    if(number == "")
        return 0;
    
    if(number.includes("," || " " || "n"))  
    {
        var numberArray = number.split(/,| |n/)
        var total = 0;
        for(var i=0; i < numberArray.length ; i++){
            if(numberArray[i]>1000)
            {
                continue;
            }
            else
            {
                total += parseInt(numberArray[i]);
            }

        }
        if(number.includes("-"))
        {
            var negatives = [];
            for(var i=0; i < numberArray.length ; i++)
            {
                if(numberArray[i] < 0)
                {
                    negatives += " " + numberArray[i]
                }
            }
            throw "Negatives not allowed:" + negatives.toString();
        }
        return total;
    } 
    else
        return parseInt(number);
}

module.exports = add;