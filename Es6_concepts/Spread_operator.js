// spread operator

const numbers = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => a+b+c+d+e;
console.log(sum(...numbers));
/* const moreNumbers = [...numbers, 6, 7];

console.log(moreNumbers);
const sum1 = (a, b, c, d, e, f, g,) => a+b+c+d+e+f+g;
console.log(sum1(...moreNumbers)); */