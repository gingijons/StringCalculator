function add (number){
    if(number == "")
        return 0;
    
    if(number.startsWith("//"))  
    {
        var delimiter = number.charAt(2);
        var newNumbers = number.substring(4);
        var newNumberArray = newNumbers.split(delimiter)
        var total = 0;
        for(var i=0; i < newNumberArray.length ; i++){
            if(newNumberArray[i]>1000)
            {
                continue;
            }
            else
            {
                total += parseInt(newNumberArray[i]);
            }
        }
        return total;
    }  

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