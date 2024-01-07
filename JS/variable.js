"use strict";
// variable declaration

// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// JavaScript Identifiers
// All JavaScript variables must be identified with unique names.

// These unique names are called identifiers.

// Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

// The general rules for constructing names for variables (unique identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.

// Automatically
// Using var
// Using let
// Using const

// x=10
// y=20
// z=x+y
// console.log(z);

// In this first example, x, y, and z are undeclared variables.

// They are automatically declared when first used:

// Note
// It is considered good programming practice to always declare variables before use.

// var x=10;
// var y=20;
// var z=x+y;

// console.log(z);

// Note
// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers


// example using let
// let x=10;
// let y=4;

// let z=x+y;
// console.log(z)

// example using const
// const x=16;
// const y=14;
// const z=x+y;
// console.log(z)

// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

//javascript variables are casesensetive firstName and Firstname both are different

// firstName="Shashikant";

// firstName="Mohit"
// console.log(firstName);

//firstname already declare we cannot declare it again
// let firstName="Shashikant";

// let firstName="Mohit" 
// console.log(firstName);

// let firstName="Shashikant";

// firstName="Mohit"
// console.log(firstName);

const pi=3.14;
console.log(pi)
pi=3.15;

