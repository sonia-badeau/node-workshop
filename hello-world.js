console.log("Hello World");

/*Create a branch called hello-world off of master. In it, write a simple node program that outputs "Hello World!" to the console.
Add an instruction to your program that will output "Hello World Again!!" 10 seconds after the program was run.
Create a pull request so we can look at your code.*/

setTimeout(function() {
    console.log('Hello World Again!!');
}, 10);