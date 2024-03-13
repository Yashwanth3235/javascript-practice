function greet(name)
{
    console.log(`hello  ${name} the Role is ${this.role}`)
}

const person = { role : 'developper'};

greet.apply(person, ['Yash']);