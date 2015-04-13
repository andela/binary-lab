## About Binary (Base-2)
Implement binary to decimal conversion.  Given a binary input
string, your program should produce a decimal output.

Decimal is a base-10 system.

A number 23 in base 10 notation can be understood
as a linear combination of powers of 10:

- The rightmost digit gets multiplied by 10^0 = 1
- The next number gets multiplied by 10^1 = 10
- The *n*th number gets multiplied by 10^*(n-1)*.
- All these values are summed.

So: `23 => 2*10^1 + 3*10^0 => 2*10 + 3*1 = 23 base 10`

Binary is similar, but uses powers of 2 rather than powers of 10.

So: `101 => 1*2^2 + 0*2^1 + 1*2^0 => 1*4 + 0*2 + 1*1 => 4 + 1 => 5 base 10`.

#### Note

- Implement the conversion yourself.
  Do not use something else to perform the conversion for you.
- Treat invalid input as binary 0.

## How to Run this Lab

+ Clone the repository
+ Open **index.html** in your browser to see the currently failing test specs you are to pass
+ Open the repository in your favorite text editor to explore the different files
+ Open **js\run-length.js** and write the function(s) or lines of code to pass the tests
+ You could refresh **index.html** in your browser intermittently to see the status of test specs.


##Notes

+ Prior understanding of Javascript classes, returning and conditional statements will be required to complete this exercise.

+ Remember that passing code is just the first step. The goal is to work towards a solution that is as readable and expressive as you can make
it.

+ Please make your solution as general as possible. Good code doesn't just pass the test suite, it works with any input that fits the specification.

Have fun!

