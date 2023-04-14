// 1. Write a js program to find maximum between two numbers.
let num1 = Number.parseInt(
  prompt(`Enter number 1 to find maximm between two numbers`)
);
let num2 = Number.parseInt(
  prompt(`Enter number 2 to find maximm between two numbers`)
);
if (num1 > num2) {
  console.log(`Number 1 is greater`);
} else {
  console.log(`Number 2 is greater`);
}


// 2. Write a js program to find maximum between three numbers.
let num01 = Number.parseInt(
  prompt(`Enter number 1 to find maximum between three numbers`)
);
let num02 = Number.parseInt(
  prompt(`Enter number 2 to find maximum between three numbers`)
);
let num03 = Number.parseInt(
  prompt(`Enter number 3 to find maximum between three numbers`)
);
if (num01 > num02 && num01 > num03) {
  console.log(`Number 1 is greater`);
} else if (num02 > num01 && num02 > num03) {
  console.log(`Number 2 is greater`);
} else {
  console.log(`Number 3 is greater`);
}

// 3. Write a js program to check whether a number is negative, positive or zero.
let npz = Number.parseInt(
  prompt(
    `Enter a number to check whether a number is negative, positive or zero.`
  )
);
if (npz > 0) {
  console.log(`Number ${npz} is positive`);
} else if (npz < 0) {
  console.log(`Number ${npz} is negative`);
} else {
  console.log(`Number is Zero`);
}

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
let divisibleNum = Number.parseInt(
  prompt(
    `Enter a number to check whether a number is divisible by 5 and 11 or not.`
  )
);
if (divisibleNum % 5 == 0 && divisibleNum % 11 == 0) {
  console.log(`The number is divisible by both 5 & 11.`);
} else {
  console.log(`The number is not divisible by both 5 & 11.`);
}

// 5. Write a js program to check whether a number is even or odd.
let evenOrOdd = Number.parseInt(prompt(`Enter a number to check whether a number is even or odd.`)) ;

if (evenOrOdd % 2 == 0 ) {
    console.log(`The number is even`);
} else {
    console.log(`The numbers is odd`);
}

// 6. Write a js program to check whether a year is leap year or alpaDigSpecial year = Number.parseInt(prompt("Enter a year: "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}


// 7. Write a js program to check whether a character is alphabet or not.

let alphabet = prompt("Enter a character: ");

if ((alphabet >= 'a' && alphabet <= 'z') || (alphabet >= 'A' && alphabet <= 'Z')) {
  console.log(`${alphabet} is an alphabet`);
} else {
  console.log(`${alphabet} is not an alphabet`);
}

// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.

let character = prompt("Enter a character: ");

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" ||
    character === "A" || character === "E" || character === "I" || character === "O" || character === "U") {
  console.log(`${character} is a vowel`);
} else {
  console.log(`${character} is a consonant`);
}


// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
let alpaDigSpecial = prompt("Enter a character: ");

if ((alpaDigSpecial >= 'a' && alpaDigSpecial <= 'z') || (alpaDigSpecial >= 'A' && alpaDigSpecial <= 'Z')) {
  console.log(`${alpaDigSpecial} is an alphabet`);
} else if (alpaDigSpecial >= '0' && alpaDigSpecial <= '9') {
  console.log(`${alpaDigSpecial} is a digit`);
} else {
  console.log(`${alpaDigSpecial} is a special character`);
}

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

let upperOrLower = prompt(`Enter a alphabet`);

if (upperOrLower >= `a` && upperOrLower <= `z`) {
  console.log(`It's a lower case alphabet`);
} else {
  console.log(`It's a upper case alphabet`);
}

// 11. Write a js program to input week number and print week day.

// 12. Write a js program to input month number and print number of days in that month.
// 13. Write a js program to count total number of notes in given amount.
// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

let angle1 = Number.parseInt(prompt("Enter the first angle:"));
let angle2 = Number.parseInt(prompt("Enter the second angle:"));
let angle3 = Number.parseInt(prompt("Enter the third angle:"));

let sum = angle1 + angle2 + angle3;

if(sum === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
  console.log("The triangle is valid.");
} else {
  console.log("The triangle is not valid.");
}

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
let side1 = Number.parseInt(prompt("Enter the first side:"));
let side2 = Number.parseInt(prompt("Enter the second side:"));
let side3 = Number.parseInt(prompt("Enter the third side:"));

if(side1+side2 > side3 && side1+side3 > side2 && side2+side3 > side1) {
  console.log("The triangle is valid.");
} else {
  console.log("The triangle is not valid.");
}

// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
// 17. Write a js program to find all roots of a quadratic equation.
// 18. Write a js program to calculate profit or loss.

let costPrice = Number.parseInt(prompt("Enter the cost price:"));
let sellingPrice = Number.parseInt(prompt("Enter the selling price:"));
if (costPrice<sellingPrice) {
  console.log(`You made profit`);
} else {
  console.log(`You made loss`);
}
// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let physics = Number.parseInt(prompt("Enter the marks in Physics:"));
let chemistry = Number.parseInt(prompt("Enter the marks in Chemistry:"));
let biology = Number.parseInt(prompt("Enter the marks in Biology:"));
let mathematics = Number.parseInt(prompt("Enter the marks in Mathematics:"));
let computer = Number.parseInt(prompt("Enter the marks in Computer:"));

let totalMarks = physics + chemistry + biology + mathematics + computer;
let percentage = (totalMarks / 500) * 100;

let grade;
if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else if (percentage >= 40) {
  grade = "E";
} else {
  grade = "F";
}

console.log("Total marks: " + totalMarks);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);


// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
