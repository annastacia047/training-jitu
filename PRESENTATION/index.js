//toLowercase() string method
//const sentence = 'The quick brown fox jumps over the lazy dog.';
     // console.log(sentence.toLowerCase());
//toUpperCase() string method
//const sentences = 'The quick brown fox jumps over the lazy dog.';
      //console.log(sentence.toUpperCase());
1.//find()
      // Input array contain some elements.
	let array = [10, 20, 30, 40, 50];
	// Method (return element > 10).
	let  found = array.find(function (element) {
		return element > 20;
	});
	// Printing desired values.
console.log(found);


//reduce array method()
const arr = [29, 46, 86.5];
const sum = arr.reduce((total, value) => total + value);
console.log(sum);

