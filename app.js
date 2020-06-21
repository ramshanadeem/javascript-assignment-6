                   
                   /* _________________ assignment # 21-25 _____________ */ 

   
   
 /* 1. Write a program that takes two user inputs for first and last name using prompt 
 and merge them in a new variable titled fullName. 
 Greet the user using his full name. 
 var first_name = prompt("Enter first name");
 var second_name = prompt("Enter second name");
 var fullName = first_name + " " + second_name;
 alert(fullName);
 */
 

 /* 2. Write a program to take a user input about his favorite mobile phone model.
 Find and display the length of user input in your browser 

  var fvt_mobile = prompt("Enter favourite mobile phone model ");
  var n =  fvt_mobile.length;
  alert(" Length of string is" +n);
 */


 /* 3. Write a program to find the index of letter “n” in the word “Pakistani” and display 
 the result in your browser . 
 var str = "pakistani";
 var n = str.indexOf("n");
 alert( "index of letter n is " + n); */


 /*  4. Write a program to find the last index of letter “l” in the word “Hello World” and
  display the result in your browser. */
  
  /*var str = "Hello World";
  var n = str.lastIndexOf("l");
  alert("Last index of n is " + n);
   */

 //5. Write a program to find the character at 3rd index in the word “Pakistani” and display
/*  the result in your browser
   var str ="Pakistani";
  var res = str.charAt(3);
  alert("Character at index 3 is " + res); 
*/

 //6. Repeat Q1 using string concat() method. 
 /*  var first_name = prompt("Enter first name");
   var second_name = prompt("Enter second name");
   var res = first_name.concat(second_name);
   alert(res);
  
   */


  //7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display 
  //the result in your browser
 /*  
   var str = "Hyderabad";
  
   var res = str.replace("Hyder"," Islam");
   alert("City " +str + '\n' +  "After replacement " +res  );


 */

 //8. Write a program to replace all occurrences of “and” in the string with “&” and display
 // the result in your browser. var message = “Ali and Sami are best friends. 
 //They play cricket and football together.”; 
 /*  var message = "Ali and Sami are best friends.They play cricket and football together.";
   var res = message.replace(/and/g , "&");
   alert("Before replace of and to & is :"+ '\n \n' + message + '\n \n' + "After replacement of and to & is " +'\n \n'  + res ); 
 */



 //9. Write a program that converts a string “472” to a number 472.
 // Display the values & types in your browser. 
/*   var text = '472';
    var integer = parseInt(text, 10);
  alert( "Value " + text + '\n ' + "Type: " + typeof text + '\n' + "Value " + integer + '\n' + "Type: " +
   typeof integer
    );
 */


//10. Write a program that takes user input. Convert and show the input in capital letters. 
/*   var input = prompt("Enter input");
  var res = input.toUpperCase();
  alert(res);
  */

//11. Write a program that takes user input. Convert and show the input in title case.
/* function titleCase(str) { 
  str = str.toLowerCase().split(' '); 
  for (var i = 0; i < str.length; i++) { 
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
  } 
  return str.join(' '); 
} 
document.write(titleCase(prompt("enter input")));

 */

//12. Write a program that converts the variable num to string. var num = 35.36 ; Remove
// the dot to display “3536” display in your browser
 /* var str =" 35.36";
 var res = str.replace('.' , "")  
 document.write(res);
 */
   1




/*13. Write a program to take user input and store username in a variable. 
If the username contains any special symbol among [@ . , !], prompt the user to enter
 a valid username.For character codes of [@ .  */

  /* var user =prompt("enter name");
  var length= user.length;
  for(var i =0 ; i <user.length ; i++)
    {
      if(user.slice(i,i+1)=="!" || user .slice( i,i+1) =="@" || user.slice(i,i+1) == ",")
      {
        alert("INVALID");
      }
    } */

 
/*14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
 Write a program to enable “search by user input” in an array. After searching
 , prompt the user whether the given item is found in the list or not. Note:
  Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, 
  program should inform about its availability. Example: 
 */

     /* var array = ["cake" , "apple pie"   , "patties", "cookie" ,"chips"];
     var bakery = prompt("enter items");
     bakery = bakery.toLowerCase();
     var bakeryitm = array.indexOf(bakery);
     if (array.indexOf(bakery) != -1)
     {
       alert( bakery +"is avaible at index " +bakeryitm + " in our bakery");

     }
     else
     {
       alert(bakery +"is not avaible ")
     }
 */



/*  15. Write a program to take password as an input from user. 
  The password must qualify these requirements: a. It should contain 
  alphabets and numbers b. It should not start with a number 
  c. It must at least 6 characters long If the password does not meet above requirements, 
  prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, 
  refer to ASCII table at the end of this document.  */
 

/*   function CheckPassword(inputtxt) 
{ 
var passw=  /^[A-Za-z]\w{7,14}$/;
if(inputtxt = passw) 
{ 
alert('Correct, try another...')


}
else
{ 
alert('Wrong...!')

}
}

document.write(CheckPassword(prompt("input")));
    */





   //16. Write a program to convert the following string to an array using 
   //string split method. var university = “University of Karachi”; Display the elements of array in your browser. 
/*  var str ='University of Karachi';
 var ar = str.split('' );
 document.write(ar );
 */
  

 //17. Write a program to display the last character of a user input. 

/*  var input =prompt (" enter user input");
 res= input.slice(-1);
 alert(res);
 */


 /*
18. You have a string “The quick brown fox jumps over the lazy dog”.
 Write a program to count number of occurrences of word “the” in given string. 
 
*/ 

/*    function gfg() { 
    var r = "the quick brown fox jumps over the lazy dog "; 
    
      
        alert(r.match(/the/g).length);
       }
       gfg();
 */
                         /*x ----------x -------x --------- */



                      /* _________________ assignment # 26-30 _____________ */ 


/* 1. Write a program that takes a positive integer from user & display the 
following in your browser. a. number b. round off value of the number 
c. floor value of the number d. ceil value of the number  
   */ 

   /* var us_input= prompt("Enter positive integar ");

   document.write("A number :" +us_input +"<br\>")
   document.write("Round of number :"+ Math.round(us_input)  +"<br\>");
   document.write("Floor value of the number :" + Math.floor(us_input)  +"<br\>");
   document.write("Ceil value of the number :" + Math.ceil(us_input)  +"<br\>");
 */



 /*
 2. Write a program that takes a negative floating point number from user &
  display the following in your browser. a. number b. round off value of the number
   c. floor value of the number d. ceil value of the number 
 */
   /* var us_input= prompt("Enter negitive integar ");

   document.write("A number :" +us_input +"<br\>")
   document.write("Round of number :"+ Math.round(us_input)  +"<br\>");
   document.write("Floor value of the number :" + Math.floor(us_input)  +"<br\>");
   document.write("Ceil value of the number :" + Math.ceil(us_input)  +"<br\>");
  */



  /*
  3. Write a program that displays the absolute value of a number. E.g.
   absolute value of -4 is 4 & absolute value of 5 is 5 
  */
/* 
 document.write( " Absolute value of -4 is  " + Math.abs(-4)+ "<br\>");
 document.write("Absolute value of 5 is  " + Math.abs(5)); */

  
 /*
 4. Write a program that simulates a dice using random() method of JS Math class.
  Display the value of dice in your browser
 */
 /* var diceRoll = Math.floor(Math.random()*6)+1;
  alert("You rolled a  " + diceRoll); */



  /* 5. Write a program that simulates a coin toss using random() method of JS Math class. 
  Display the value of coin in your browser  */
   
  /* var toss =( Math.floor(Math.random()*2)==0);
  if (toss)
  {
    alert("heads");
  }
  else{
    alert("tails");
  } */


  /*6. Write a program that shows a random number between 1 and 100 in your
   browser.*/
  /*  var randomNumber = (Math.floor(Math.random()*100) +1);
   alert(" Ramdom number between 1 and 100 is : " +randomNumber);
 */

 /*7. Write a program that asks the user about his weight. Parse the user input
  and display his weight in your browser. Possible user inputs can be */


/*  var weight = prompt("enter");
 var w = parseFloat(weight)
 alert(w); 
  */

  
  /*8. Write a program that stores a random secret number from 1 to 10 in a variable. 
  Ask the user to input a number between 1 and 10.If the user input equals the secret number, 
  congratulate the user*/
 /*  var secretNumber = Math.floor(Math.random()*10)+1;
 var inputNumber = prompt("Input a numbet between 1 to 10");
  if(inputNumber == secretNumber)
  {
    alert( secretNumber + " Congratulation !...")

  }
  else if (inputNumber != secretNumber)
  {
    alert( secretNumber + " wrong!..")
  } */

    /*x ----------x -------x --------- */



                /* _________________ assignment # 31-34 _____________ */ 

  /*  1. Write a program that displays current date and time in your browser. */
 
     /* var d = new Date();
     alert(d); */


     /*2. Write a program that alerts the current month in words. For example December.*/
    /*  var d = new Date();
     var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];   
     
      var monthName=months[d.getMonth()];
      alert("Current month is : " +monthName); */


      /*3. Write a program that alerts the first 3 letters of the current day, for example 
      if today is Sunday then alert will show Sun */
      /* var d = new Date();
      var months = ['jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];   
      
       var monthName=months[d.getMonth()];
       alert("Today is  : " +monthName); */ 



       /*4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday
        today. */
        /* var today = new Date();
        if (today.getDay()==6 || today.getDay==0)
        {
        alert("It's funday");
        }
       */


       /*5. Write a program that shows the message “First fifteen days of the month”
        if the date is less than 16th of the month else shows“Last days of the month”.  */
        /*   var d= new Date();
          
          if (d < 16)
          {
            alert("First fifteen days of the month");
          }
      else
      {
        alert("Last days of the month");
      } */

     /* 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and 
     assigns it to a variable that hasn't been declared beforehand
     . Use any variable you like to represent the Date object.  */


    /*  var min = new Date();
     var minMili = min.getTime();
     var minutes_convert = minMili/(1000*60*60)
     document.write("Current date" +min + "<br>");
     document.write("Elapsed millisecond since january 1,1970: " + minMili + "<br>");
     document.write("Elapsed minutes since january 1,1970: " +minutes_convert+ "<br>");
 */


      /*7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.  */

    /*  var hours = new Date().getHours();
  if (hours >= "00.00.00 " && hours<= "12.00.00")

 {
  alert("It's AM");
 }
 else
 {
  alert("PM");
 } 
  */

 /*8. Write a program that creates a Date object for the last day of the last month of 2020 and
  assigns it to variable named laterDate. */
 /* var date = new Date();

var lastDay = new Date(date.getFullYear(), date.getMonth() + 7, 0);
alert(lastDay);

    */
   /* 10. Write a program that displays in your browser the seconds that elapsed between the reference
    date and the beginning of 2015. */
  /*  function SecondsBetween2Dates() {
     
   
   var date1, date2;
         date1 = new Date();
         
         date2 = new Date( "Dec 5, 2015 22:50:16" );
         
         // get total seconds between two dates
         var seconds = Math.abs(date1 - date2) /1000;
         document.write("On reference date " + date2+  " "+ seconds +" had passed since beginning 2015");

   }
   SecondsBetween2Dates(); */


   /* 9. Create a date object of the starting date of this Ramadan and alert the number of days
    past since 1st Ramadan?
    Note: 1st Ramadan was on June 18, 2015 */
    
   /* function pastRamzan() {
     var date1 =new Date("june 24,2020");
     var date2 = new Date("June 18, 2015");
     var Difference_intime =Math.abs( date2.getTime() - date1.getTime());
     var Difference_In_Days =Difference_intime/ (1000 * 3600 * 24);  
     document.write(Difference_In_Days + " had passed since 1st Ramadan 2015");
   }
   pastRamzan(); */

    /*11. Create a Date object for the current date and time. Extract the hours, 
    reset the date object an hour ahead and finally display the date object in your browser. 
  */
/* 
    function an_Hour() {
      var d= new Date();
      var time = d.getHours()+1 + ":" + d.getMinutes() + ":" + d.getSeconds();
    var today = new Date ("June 20 , 2020 "+ time);
      alert("current date :"+ d+"\n"+"1 hour ago it was  "  + today )
    }
    an_Hour(); */

  /*12. Write a program that creates a date object and show the date in an alert box that is reset
   to 100 years back?  */

    /* function myFunction() {
      var d = new Date();
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      
      var n = [d.getFullYear()-100];
      var back = new Date ("June 20 ,"+ n + " " +time  );
      document.write("Current date : " +d + "<br>");
      document.write("100 year back , it was " + back )
    }
    myFunction(); */
 

/*13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
 */
/*
function birth_year(age) 
{
  age = parseInt(age);
  var today = new Date ();
  var current_year = today.getFullYear();
  var birth = current_year-age;
  alert("your age is : "+age+ "\n your birth year is " + birth);
  
}
   birth_year(prompt("enter your age"));
*/


/*14. Write a program to generate your K-Electric bill in your browser.
 All the amounts should be rounded off to 2 decimal places.
 Display the following fields:  */

/* function K_Electric() {


   var customer_Name = prompt("enter name");
   var units = prompt("enter unit");
   var date = new Date ();
   var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];  
   var monthName=months[date.getMonth()];
   var charges_per_unit = 16;
   var surcharge  = 350;
   var net = units*charges_per_unit;
   var gross_amount= net+surcharge;
   document.write("Customer name : " +customer_Name  +"<br>");
   document.write("Month " + monthName +"<br>");
   document.write("Number of unit" + units +"<br>");
   document.write("Charges per unit " +charges_per_unit +"<br>");
   document.write("Net amount payable with in due date " +net + "<br>");
   document.write("Late payment surcharge" +surcharge +"<br>");
   document.write( "Gross amount  payable after due date :" + gross_amount  );
}
 K_Electric(); */

                 /*x ----------x -------x --------- */



                      /* _________________ assignment # 35-38 _____________ */ 

/*1. Write a function that displays current date & time in your browser.  */
                     /*  function abc() {
                        var d = new Date();
                       alert(d);
    
                      }
                           abc(); */



/*2. Write a function that takes first & last name and then it greets the user 
 his full name.  */

                   /*    function abc() {
                        var first_name = prompt("Enter first name");
                        var second_name = prompt("Enter second name");
                        var fullName = first_name + " " + second_name;
                        alert(fullName);
                       }

                       abc(); */
/*3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
    *//* function abc() {
     
      var num1 = +prompt("enter number 1");
      var num2 =+prompt("enter number2");
      
     return num1+num2;

    }

    var sum = abc();
     alert(sum);
      */


      /*4. Calculator:  Write a function that takes three arguments num1, num2 &
       operator & compute the desired operation. Return and show the desired result 
       in your browser.  */
  /* function abc(num1,op, num2) {
     if (op = '+')
     {
      
      return num1+num2;
     }
     else if (op = '-')
     {
      return num1-num2;
     }
     else if (op = '*')
     {
       return num1*num2 ;
     }

    
  }
  var calc = abc(1, '+' ,3)
  alert(calc); */

  /*5. Write a function that squares its argument.  */
 /*  function abc (num1) {
    return num1*num1;
  }
  var sq = abc(2);
  alert(sq); */


  /*6. Write a function that computes factorial of a number.  */

//   function fact(num) 
//   {
//     if(num === 0 || num=== 1)
    
//       return 1;
    
//     for (var i = num-1 ; i>=1 ; i--)
//     {
//       num=num*i;
//     }
//     return num;
    
//   }
//  var res= fact(5);
//  alert(res);
 /* 
                    num      var i = num - 1       num *= i         i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
    5th iteration: 120               0                120
    End of the FOR loop 
    */



    
    /*7. Write a function that take start and end number as inputs & display counting in your browser */
 
/* function num () {
  var i = prompt("enter num1")
  var n = prompt("enter num");

  for (var i  ; i<= n ; i++)
  {
    alert(i) ;
  }
}
alert(num());

/*8. Write a nested function that computes hypotenuse of a right angle triangle. 
 Hypotenuse2 = Base2 + Perpendicular2  */
 

/* function hypotenuse(a, b) {
  function square(x) { return x*x; }
  return Math.sqrt(square(a) + square(b));
}
function secondFunction() {
  var result;
  result = hypotenuse(1,2);
  document.write ( result );
}

var res = hypotenuse(1,2)
alert(res);
 */


 /*9. Write a function that calculates the area of a rectangle.      A = width * height  */


 /* function areaOfRectangle(width,height) {
   var result = width*height;
   return result;

 }
 
 var res = areaOfRectangle(2,3);
 alert(res);
 */

/*10. Write a JavaScript function that checks whether a passed string is palindrome or not?   A palindrome is word, phrase, or sequence
  that reads the same backward as forward, e.g., madam.  */


                           /* function palindrome(text) {
                            
                            var reversedText  = text.toLowerCase()
                                                .split('').reverse().join('');
                            
                            
                            return text === reversedText;
                            
                            
                            }
                            var res = palindrome(prompt("enter"));
                            alert(res); */


 /*11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  EXAMPLE STRING : 
 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox'  */
 /* function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

var res = capital_letter('the quick brown fox');
alert(res); */




/*12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 
  */
/* function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
var res = (find_longest_word('Web Development Tutorial'));
alert(res); */



/*13. Write a JavaScript function that accepts two arguments, a string and a letter and the function
 will count the number of occurrences of the specified letter within the string.  Sample arguments
  : 'JSResourceS.com', 'o'  
   */
/* 
  function char_count(str, letter) 
  {
   var letter_Count = 0;
   for (var position = 0; position < str.length; position++) 
   {
      if (str.charAt(position) == letter) 
        {
        letter_Count += 1;
        }
    }
    return letter_Count;
  }
  var res = char_count('JSResourceS.com', 'o');
alert(res); */


/*14. The Geometrizer Create 2 functions that calculate properties of a circle, 
using the definitions here. Create a function called calcCircumference: •
 Pass the radius to the function. • Calculate the circumference based on the radius, 
 and output "The circumference is NN". Create a function called calcArea:
  • Pass the radius to the function. • Calculate the area based on the radius, and output 
  "The area is NN". 
 
Circumference of circle    =     2πr Area of circle       =     πr2 
 
  */
  


  /* function calcCircumference(radius) {
    var circumference = 2 * (22/7) *radius;
    return circumference;
  }
  var res = calcCircumference(2);
  alert(res);
 */
/* 
  function calcArea(radius) {
    var area = (22/7)*radius*radius;
    return area;
  }
  var res = calcArea(2);
  alert(res);  */




