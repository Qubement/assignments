//=================Chapter 21-25 Tasks======================

//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first Name : ");
var lastName = prompt("Enter your last Name : ");

var fullName = firstName + " " + lastName;
alert("Welcome " + fullName);

//2. Write a program to take a user input about his favorite mobile phone model.Find and display the length of user input in your browser

var fav = prompt("Enter your favourite mobile phone model :");
var result = fav.length;
document.write(
  "Your favorite phone is : " + fav + " <br>Length of string : " + result
);

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var text = "Pakistani";
var result = text.indexOf("n");
document.write("String : " + text + " <br>Index of 'n': " + result);

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var text = "Hello World";
var result = text.lastIndexOf("l");
document.write("String : " + text + " <br>Last Index of 'l': " + result);

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var text = "Pakistani";
var result = text.charAt(3);

document.write("String : " + text + " <br>Character at Index 3: " + result);

//6. Repeat Q1 using string concat() method.

var firstName = prompt("Enter your first Name : ");
var lastName = prompt("Enter your last Name : ");

var fullName = firstName.concat(" ", lastName);
alert("Welcome " + fullName);

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";

var result = city.replace("Hyder", "Islam");

document.write("City : " + city + " <br>After replacement : " + result);

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

var message =
  "Ali and Sami are best friends. They play cricket and football together.";

var result = message.replace(/and/g, "&");

alert(result);

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var numString = "472";
var onlyNum = 472;
var result = Number(numString);
var type1 = typeof numString;
var type2 = typeof onlyNum;

document.write(
  "Value: " +
    result +
    " <br>Type: " +
    type1 +
    "<br>Value: " +
    onlyNum +
    " <br>Type: " +
    type2
);

//10. Write a program that takes user input.Convert and show the input in capital letters.

var userInput = prompt("type anything in Lowercase letter :");
var result = userInput.toUpperCase();
document.write("User input : " + userInput + " <br>Upper case : " + result);

//11. Write a program that takes user input. Convert and show the input in title case.

var userInput = prompt("type anything in Lowercase letter :");
var result = userInput.charAt(0).toUpperCase() + userInput.slice(1);
document.write("User input : " + userInput + " <br>Title case : " + result);

//12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.
var num = 35.36;
var result = parseInt(num.toString().replace(".", ""));
document.write("Number : " + num + " <br>Result : " + result);

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

//Note: ASCII code of !is 33 ASCII code of , is 44 ASCII code of .is 46 ASCII code of @ is 64

var username = prompt("Enter your username : ");
if (/^[a-zA-Z0-9- _]*$/.test(username) == false) {
  alert("Please enter a valid username");
} else {
  alert("Welcome " + username);
}

//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
//After searching, prompt the user whether the given item is found in the list or not.
//Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var user_value = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/madam"
);
var rr = user_value.toLowerCase();
var found;
var indexOfOrder;
for (var i = 0; i < a.length; i++) {
  if (a[i] == rr) {
    found = a[i];
    indexOfOrder = i;
  }
}
if (!found) {
  document.write(
    "We are sorry. " + user_value + " is <b>not available</b> in our bakery"
  );
} else {
  document.write(
    found + " is <b>available</b> at index " + indexOfOrder + " in our bakery"
  );
}

//15. Write a program to take password as an input from user.

var p = prompt("Enter your password :");
if (p.length < 6) {
  document.write(
    "Entered password : " +
      p +
      " <br>Your password must be at least 6 characters<br>Please enter a valid password"
  );
} else if (!isNaN(p.charAt(0))) {
  document.write(
    "Entered password : " +
      p +
      " <br>Your password should not start with a number<br>Please enter a valid password"
  );
} else if (p.match(/^[0-9a-zA-Z]+$/)) {
  document.write(
    "Entered password : " +
      p +
      " <br>Your password is in correct format<br>Format :/^[0-9a-zA-Z]+$/"
  );
}

//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.

var university = "University of Karachi";

var result = university.split("");
for (var i = 0; i < result.length; i++) {
  document.write(result[i] + "<br>");
}

//17. Write a program to display the last character of a user input.

var user_value = prompt("Write a text");
var result = user_value.substr(-1);
document.write(
  "User input : " + user_value + " <br>Last character of input : " + result
);

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var temp = "The quick brown fox jumps over the lazy dog";
var result = (temp.match(/the/gi) || []).length;
document.write(
  "Text : " + temp + " <br>There are " + result + " occurrences of word 'the'"
);

//============Chapter 26-31 Tasks===================================

//1. Write a program that takes a positive integer from user & display the following in your browser.

var num = prompt("Enter a positive number for e.g: 3.45214");
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);
document.write(
  "number : " +
    num +
    "<br>round off value : " +
    round +
    "<br>floor value : " +
    floor +
    "<br>ceil value : " +
    ceil
);

//2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number

var num = prompt("Enter a negative number for e.g: -2.673");
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);
document.write(
  "number : " +
    num +
    "<br>round off value : " +
    round +
    "<br>floor value : " +
    floor +
    "<br>ceil value : " +
    ceil
);

//3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var value = -4;
var result = Math.abs(value);
document.write("The absolute value of " + value + " is " + result);

//4. Write a program that simulates a dice using random() method of JS Math class.Display the value of dice in your browser.:
var result = Math.floor(Math.random() * 6);
document.write("Random dice value : " + result);
var result = Math.floor(Math.random() * 6);
document.write("<br>Random dice value : " + result);

//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var result = Math.floor(Math.random() * 2);
document.write("Random coin value heads: " + result);
var result = Math.floor(Math.random() * 2);
document.write("<br>Random coin value tails : " + result);

//6. Write a program that shows a random number between 1 and 100 in your browser.

var rand = Math.floor(Math.random() * 100);
document.write("random number between 1 and 100 : " + rand);

//7. Write a program that asks the user about his weight.Parse the user input and display his weight in your browser.Possible user inputs can be: a.50 b.50 kgs c.50.2 kgs d.50.2 kilograms

var user_weight = prompt("Enter your weight in kilograms :  ");
var result = user_weight.replace(/\D/g, "");
document.write("The weight of user is : " + result + " kilograms");

//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

var rand = Math.floor(Math.random() * 10);
var pro = parseInt(prompt("Enter a number between 1 to 10"));
if (pro == rand) {
  alert("Congratulation your guess is correct");
} else {
  alert("Try again");
}

//================== Chapter 31-34 Tasks =================

//1. Write a program that displays current date and time in your browser.

var d = new Date();
document.write(d);

//2. Write a program that alerts the current month in words. For example December.

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var d = new Date();
alert("The current month is " + monthNames[d.getMonth()]);

//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n = weekday[d.getDay()];

alert(n);

//4. Write a program that displays a message“ It’ s Fun day” if its Saturday or Sunday today.

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n = weekday[d.getDay()];

if (n == "Sat" || n == "Sun") {
  alert("Its Fun day");
} else {
  alert("Stress day");
}

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var date = new Date();
var onlyDate = date.getDate();
if (onlyDate > 15) {
  document.write("Last days of the month");
} else {
  document.write("First fifteen days of the month");
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  //var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes;
}

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

var d = new Date();
var mili = d.getTime();

var minutes = millisToMinutesAndSeconds(mili);
document.write(
  "Current date : " +
    d +
    "<br>Elapsed Time: " +
    mili +
    "<br>Elapsed Minute: " +
    minutes +
    "<br>"
);

//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var d = new Date();
var hour = d.getHours();
if (hour > 12) {
  alert("Its PM");
} else {
  alert("Its AM");
}

//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var laterDate = new Date(2020, 12, 0);
document.write("Later date: " + laterDate);

//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

var ramzan = new Date(2020, 6, 17);
var d = new Date(2015, 6, 18);

var diffTime = Math.abs(d - ramzan);
var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.write(diffDays + " days have passed since 1st Ramadan,2015");

//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var now = new Date();
var start = new Date(2015, 0, 1);
var dif = now.getTime() - start.getTime();

var Seconds_from_T1_to_T2 = dif / 1000;
var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
document.write(
  "On reference date " +
    now +
    " <br>" +
    Seconds_Between_Dates +
    " seconds had passed since begining of 2015"
);

//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
var cur = new Date();

document.write("Current date : " + cur);
var d = new Date();

d.setHours(d.getHours() - 1);
document.write("<br>1 hour ago, it was " + d);


//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back ?


  var cur = new Date();
  var d = new Date();
  d.setFullYear(d.getFullYear() - 100);
  alert("Current date :" + cur + "\n100 years back, it was " + d);


//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 

  var age = parseInt(prompt("Enter your age : "));
  var d = new Date();
  var birth = d.getFullYear() - age;
  document.write("Your age is " + age + "<br>Your birth year is " + birth);


//14. Write a program to generate your K-Electric bill in your browser.


  var cust_name = "ABC Customer";
  var month = "february";
  var unit = 410;
  var per_unit = 16;
  var Net_amount_payable = unit * per_unit;
  var surcharge = 350;
  var Gross = Net_amount_payable + surcharge;

  document.write(
    "<h1>K-Electric Bill</h1><br>Customer Name: <b>" +
      cust_name +
      "</b><br>Month: " +
      month +
      "<br>Number of units: " +
      unit +
      "<br>Charges per unit: " +
      per_unit +
      "<br><br>Net Amount Payable (within Due Date): " +
      Net_amount_payable +
      "<br>Late payment surcharge: " +
      surcharge +
      "<br>Gross Amount Payable (after Due Date): " +
      Gross
  );

//================== Chapter 35-38 Tasks =================

//1. Write a function that displays current date & time in your browser.

function time() {

  var date = new Date();
  //document.write(date);
  return date;
}

document.write(time());



//2. Write a function that takes first & last name and then it greets the user using his full name. 

function name() {
  var A;
  var B;
  A = window.prompt("Please enter first name");
  B = window.prompt("Please enter last name");
  document.write("Welcome ! ")
  return A + B;
}
document.write(name());




//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers. 


function add() {
  var A;
  var B;
  A = window.prompt("Please enter first number");
  B = window.prompt("Please enter second number");
  return +A + +B;

}
document.write(add());




//. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser. 

function operator() {
  var num1;
  var num2;
  num1 = window.prompt("Please enter first number");
  num2 = window.prompt("Please enter second number");
  return +num1 + +num2;

}
document.write(operator());




//5. Write a function that squares its argument. 

function square() {
  var num1;
  num1 = window.prompt("Please enter number");
  return +num1 * +num1

}
document.write(square());



//6. Write a function that computes factorial of a number. 

var A;
var i;
var B;
function factorial() {
  A = window.prompt("Please enter the number")
  for (i = A; i > 0; i = i - 1) {

  }


}
document.write(factorial());




//7. Write a function that take start and end number as inputs & display counting in your browser

function counting() {
  var num1;
  var num2;
  var i;
  num1 = window.prompt("Please enter first number");
  num2 = window.prompt("Please enter last number");
  for (i = num1; i < num2; i++)
    document.write(i + "<br>");
  return i;

}
document.write(counting());




//8. Write a nested function that computes hypotenuse of a right angle triangle.  

var B;
var P;
var Base;
var Perpendicular;
var Hypotenuse;
function calculateHypotenuse() {
  B = window.prompt("Please enter the Base of a triangle ");
  P = window.prompt("Please enter the perpendicular of a triangle ");
  Base = B * B;
  Perpendicular = P * P;
  Hypotenuse = Base + Perpendicular;
  return Hypotenuse
}

document.write(calculateHypotenuse())




//9. Write a function that calculates the area of a rectangle. 

function area() {
  var width;
  var height;
  var area;
  width = window.prompt("Please enter width of rectangle ");
  height = window.prompt("Please enter height of rectangle ");
  area = width * height;
  return area;

}
document.write(area());




//10. Write a JavaScript function that checks whether a passed string is palindrome or not?  

var word = prompt("Enter a word: ")

 function palandrome(word) {
     var pal = "";
          for (var i = word.length - 1; i >= 0; i--) {
         pal += word[i];
     }
     if( pal === word){
         document.write("It's a palandrome!")
     }
     else{
         document.write("It's not a palandrome!")
     }
 }


 var result = palandrome(word);
 document.write(result)





//11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case


var str = window.prompt("Please enter the string");
function uppercase(str) {
  var array1 = str.split(' ');
  var newarray1 = [];

  for (var x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write("EXAMPLE STRING :" + str + "<br>" + "EXPECTED OUTPUT :")
document.write(uppercase(str));



//12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 


var str = window.prompt("Please enter the string");
function find_longest_word(str) {
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for (var x = 1; x < array1.length; x++) {
    if (result.length < array1[x].length) {
      result = array1[x];
    }
  }
  return result;
}
document.write("EXAMPLE STRING :" + str + "<br>" + "EXPECTED OUTPUT :")
document.write(find_longest_word(str));






//13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number 


var str = window.prompt("Please enter the string ");
var letter = window.prompt("Please enter the world ");
function char_count(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}
document.write("Sample arguments : " + "'" + str + "'" + "," + "\n " + "'" + letter + "'" + "<br>")
document.write(char_count(str, letter));





//14. Create 2 functions that calculate properties of a circle, using the definitions here. 


radius = window.prompt("Please enter the radius of circle ");
var radius;
var circumference;
var area;


function calcCircumference(radius) {
  circumference = 2 * 3.142 * radius;
  return circumference;
}

function calcArea(radius) {
  area = 3.142 * radius * radius;
  return area;
}

document.write("The circumference is " + calcCircumference(radius) + "<br>");
document.write("The area is " + calcArea(radius))


//===========================================Finish================================================