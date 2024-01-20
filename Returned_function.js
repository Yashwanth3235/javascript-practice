/* function addNumbers(a,b)
{
    var sum = a + b;
    return sum; 
    // The result is returned here
}
var result = addNumbers(2,5);
console.log(result); */


function first_word(gesture)
{
    function second_word(name)
    {
    return gesture + ' ' + name; 
    }
    return second_word;
}

const greeting = first_word("hello,");
const greet = greeting("Franky");

console.log(greet);
        