//1.
function removeDuplicates(arr) {
    // Create a new array to store the unique items
    let unique = [];
  
    // Iterate through the input array
    for (let i = 0; i < arr.length; i++) {
      // Convert the current item to lowercase
      let lowercase = arr[i].toLowerCase();
  
      // Check if the lowercase version of the item is already in the unique array
      if (!unique.includes(lowercase)) {
        // If not, add the lowercase version of the item to the unique array
        unique.push(lowercase);
      }
    }
  
    // Return the unique array
    return unique;
  }
  
  let myArray = ["Apple", "Banana", "Apple", "orange", "Banana"];
  console.log(removeDuplicates(myArray));

  //2.
  function contains(arr, element) {
    // Iterate through the input array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current item is equal to the element
      if (arr[i] === element) {
        // If it is, return true
        return true;
      }
    }
  
    // If the element is not found, return false
    return false;
  }
  
  let myArrays = [1, 2, 3, 4, 5];
  console.log(contains(myArrays, 3)); // Output: true
  console.log(contains(myArrays, 6)); // Output: false

  //3.
  function clearArray(arr) {
    // Use the filter() method to remove all unnecessary elements
    return arr.filter(function (el) {
      // Keep only the elements that are truthy (not falsy)
      return el;
    });
  }
  
  let myItems = [1, "", 2, false, undefined, null, 0, "hello", "world"];
  console.log(clearArray(myItems)); // Output: [1, 2, "hello", "world"]
  
  //4.
  function reverseWords(str) {
    return str.split(" ").reduce((acc, curr) => curr + " " + acc);
}
console.log(reverseWords("Hello World")); // Output: "World Hello"
console.log(reverseWords("My name is John")); // Output: "John is name My"

  
  
  