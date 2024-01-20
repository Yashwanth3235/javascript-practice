/* function* Gamerszone()
{
yield "Game 1";
yield "Game 2";
yield "Game 3";
}
// Creating an instance of the generator
const generator = Gamerszone();
// calling the generator and getting values
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
 */

/* for(const value of Gamerszone())
{
    console.log(value);
} */

function* Generator()
{
    yield "world";
}
const Generator_function = Generator();

console.log("hello," + ' ' + Generator_function.next().value);