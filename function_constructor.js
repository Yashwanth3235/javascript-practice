function Person (name,age)
{
    this.name = name;
    this.age = age;
}

const person1 = new Person("dave",24);
console.log("naem:" + ' ' + person1.name);
console.log("age:" + ' ' + person1.age);