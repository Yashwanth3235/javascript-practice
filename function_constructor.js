function Person (name)
{
    this.name = name;
}

const person1 = new Person("dave");
console.log("hello," + ' ' + person1.name);