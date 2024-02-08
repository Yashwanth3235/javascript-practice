// 1.Write a program to demonstrate JavaScript loops, operators and conditions?


//  if-else statement

 let n=5;
 let html=10;
 if(html>5)
 {
    console.log("Html is greater")
 }
 else
 {
    console.log("n is greater")
 }



//  for loop example

var t;
t=5;
for (let i = 1; i <= t; i++) {
    console.log(" for loop iteration" + ' '  + i);
  }



//   while loop example

let i = 1;

    while (i <= 5)
    {
        console.log("while loop iteraion" +' ' + i);
        i++;    
    } 

//  do-while loop example

let I = 1;
do 
{
  console.log("do while loop iteraion" + ' ' + I );
  I++;
} 
while (I <= 5);


// day identification :-

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const today = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek === 0) {
  console.log("It's Sunday!");
} 
    else if (dayOfWeek === 1) 
        {
            console.log("It's Monday");
        }   
    else if (dayOfWeek === 2) 
        {
            console.log("It's Tuesday");
        }   
    else if (dayOfWeek === 3) 
        {
            console.log("It's Wednesday");
        }   
    else if (dayOfWeek === 4) 
        {
            console.log("It's Thursday");
        }   
    else if (dayOfWeek === 5) 
        {
            console.log("It's Friday");
        }   
    else if (dayOfWeek === 6) 
        {
            console.log("It's Saturday");
        }   
    else
    {
        Console.log("it's not day its night ");
    }


