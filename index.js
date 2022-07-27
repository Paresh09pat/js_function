// Functions

// Q.1) Create one function with zero parameter having a console statement

// var only = function (){
// console.log("Paresh");
// }
// only();

//or

//  hello = () => {
// console.log();
// }


// Q.2) Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

let sum = function (p,q){
    // let p = 3;
    // let q = 4;
    let add = p + q;
    console.log(add);
};
sum(3,4);


// Q.3) Create one arrow function

const hello = () => {
    console.log('Hello World!'); 
  }
hello();


// Q.4) Print output: 

var girl = function () {
    var x = 25;
    console.log(x);
    var x = 20;
};
girl ();

// Output : It print the value of 'x' 25 two times


// Q.5) Print output: 
var s = 21;
girl ();
console.log(s)
function girl() {
    console.log(s);
    var s = 20;
};

// Output : 21 (only line 49 is executed)


// Q.6) Print output

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

// Output : It gives as an error 'a is not defined at line 61'



// Q.7) Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
    let row = 1;
    for (let i = 1; i <= n; i++) {
      row = row * i;
    }
    console.log(row);
  }
  factorial(5);