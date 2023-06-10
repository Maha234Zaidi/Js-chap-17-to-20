// ================chapters 17-20==========================//
 //================ARRAYS AND LOOPS=============//

//  question 01 //
// ans
// var array =[];

// question no 02//
//ans
// var array = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// for(var i = 0; i < 3; i++){
//     for(var j = 0; j < 4; j++ ){
//         document.write(array[i][j] + " ");
//     }
//     document.write("<br>");
// }

// question no 03//
//ans
// for(var i = 1; i <=10; i++){
//     document.write( i + "<br>");
// }

// question no 04///
// ans
//  var tableOfAnyNum = +prompt("Enter a number to show its multiplication table");
//  var tableOfLength = +prompt("Enter length multiplication table");
//  document.write("Multiplication table of " + tableOfAnyNum + " Length " + tableOfLength + "<br>")
//  for(var i = 1; i <=tableOfLength;i++){
//     document.write(tableOfAnyNum + " x " + i + " = " + tableOfAnyNum*i+ " <br> " );
    
//  }

// question no 05//
//ans
// var fruitNames= ["Apple","Banana","Mango","Orange","Strawberry"];
// for(var i = 0; i <= 4; i++){
//     document.write(fruitNames[i] + "<br>")
// }
// document.write("<br>");
// for(var j = 0; j <= 4; j++ ){
//     document.write("Element at index " + j + " is " +fruitNames[j] + "<br>");
// }

// question no 06// 
// a //
// document.write("<h4>" + "Counting" + ":" + "</h4>")
// for(var i = 1; i <= 15; i++)(
//  document.write( i + "," + " " )
// );

// b //
// document.write("<h4>" + "Reverse Counting " + ":" + "</h4>")
// for(var i = 10; i >=1; i--){
//     document.write(i + "," + " ")
// };

// c //
// document.write("<h4>" + "Even " + ":" + "</h4>")
// for(var i = 0; i <=20; i++){
//     document.write(i++ + "," + " ")
// };

// d //
// document.write("<h4>" + " Odd " + ":" + "</h4>")
// for(var i = 1; i <= 19; i = i+2){
//     document.write(i + "," + " ")
// }

// e //
// document.write("<h4>" + "Series " + ":" + "</h4>") 
// for(var i = 2; i <= 20; i++){
//     document.write(i++ + "k" + "," + " ")
// }

// question no 07//
// ans 
// var userInput = prompt("Welcome to ABC Bakery.What do you want to order SIR/MAM?");
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var flag = false;
// for(var i = 0; i < items.length; i++){
//     if(userInput === items[i]){ 
//         document.write(items[i] + " is available at index " + i + " in our bakery ")
//         flag = true
//     }
// }
// if (flag === false){
// document.write("We are sorry " + userInput + " is not available in our bakery ");
// }

// question no 08//
// //ans
// var numberOfArray = [24,53,78,91,12]
// var largestNumber = numberOfArray[0]

// for (var i = 0; i < numberOfArray.length; i++){
//     if(numberOfArray[i] > largestNumber){
//         largestNumber = numberOfArray[i];
//     }
// }
// document.write("Array Items: " + numberOfArray + "," + "<br>")
// document.write("The largest number is " + largestNumber)

// question no 09//
//ans
// var numberOfArray = [24,53,78,91,12]
// var smallestNumber = numberOfArray[0]

// for (var i = 0; i < numberOfArray.length; i++){
//     if(numberOfArray[i]< smallestNumber){
//         smallestNumber = numberOfArray[i]; 
    
//     }
// }
// document.write("Array Items: " + numberOfArray + "," + "<br>")
// document.write("The smallest number is " + smallestNumber)

// question 10//
//ans
// for(var i = 5; i <= 100; i = i+5){
//     document.write(i + "," + " " )
// }

// ========================================COMPLETED===============================//