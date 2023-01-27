//1.
function foo1() {
 
    return {bar: "hello"};
    }
    console.log(foo1());
    foo1();

    //function foo2() {

       //Return
        
        //{bar: "hello"};
        
       //}
       //console.log(foo2());
      // foo2();

       //NO. the two functions will not output the same result.
      // The first function, foo1(), uses the return keyword in lowercase letters and it will return an object with a property bar and value "hello" as expected.
//The second function, foo2(), uses the Return keyword with an uppercase 'R' and it will throw a syntax error because Return is not a valid keyword in JavaScript. And the function will not execute.
//Because JavaScript is case-sensitive, return and Return are treated as different keywords.
//It's always recommended to use the return keyword in lowercase letters to avoid any unexpected errors or bugs.

//2.
function palindromeFun (str )  
{  
// convert the string into an array using the string.split() function  
const arrValue = string.split (''); //   
  
// use reverse() method to reverse the array values  
const reveArrVal = arrValue.reverse();   
  
// use join() method to group the array values into the string  
const revString = reveArrVal.join('');  
  
if (string == revString) // if string condition is equal to the revString  
{  
alert('It is a Palindrome string '); // print the Palindrome   
}  
else {  
alert (' It is not a Palindrome string' ); // if the condition is not true.  
}  
}  
// take a string from the user  
const string = prompt( ' Enter the string to check Palindrome ');  
const value = palindromeFun (string); // call the function  
console.log(value);  
  

  //3.
 let numbers = prompt("Enter numbers separated by commas:");
 let numberArray = numbers.split(",");
 let sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    sum += parseInt(numberArray[i]);
  }
  console.log("The sum of the numbers is: " + sum);

  //4.
// Example callback function
function traverseElements(element, callback) {
    callback(element);
    let children = element.children;
    for (let i = 0; i < children.length; i++) {
      traverseElements(children[i], callback);
    }
  }
console.log(traverseElements(element, callback));
traverseElements(element, callback);

  
  
  