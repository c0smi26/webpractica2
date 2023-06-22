// 1
function displayArray(){
    var arr1 = [1, 2, 3];
    var arr2 = new Array(4, 5, 6);
    var arr3 = [];
    arr3[0] = 7;
    arr3[1] = 8;
    arr3[2] = 9;

    document.getElementById('result').innerHTML = 
    "Массив 1: " + arr1 + "<br>" +
    "Массив 2: " + arr2 + "<br>" +
    "Массив 3: " + arr3;
}
// 2
function displayArray1(){
    var myArray = [1, 2, 3, 4, 5];
  
    var fifthElement = myArray[4];
  
    myArray[4] = 5;
  
    document.getElementById('results').innerHTML = 
    "Пятый элемент массива: " + fifthElement + "<br>" +
    "Массив с измененным пятым элементом: " + myArray;
}
// 3
function displayArray3(){
    var myArray = [1, 2, 3, 4, 5,6];

    document.getElementById('result3').innerHTML = "Длина массива: " + myArray.length;

    var elements = document.querySelectorAll('.hover-element');
    for (var i=0; i<elements.length; i++) {
    elements[i].addEventListener('mouseover', function(){
        document.getElementById('result3').innerHTML = "Длина массива: " + myArray.length;
    });
    }
}
// 4
function displayArray4(){
    var myArray = [1, 2, 3, 4, 5];

    var result = "";
    for(var i = 0; i < myArray.length; i++){
    result += myArray[i] + " ";
    }

    document.getElementById('result4').innerHTML = result;
}
// 5
function combineArrays(){
    var array1 = [1, 2, 3];
    var array2 = [4, 5, 6];
  
    var combinedArray = array1.concat(array2);
  
    document.getElementById('result5').innerHTML = combinedArray;
}
// 6
const myArray = ["1", "2", "3", "4", "5"];
// Display the array before deletion
document.getElementById("before").textContent = myArray.join(", ");
// Delete the last element and store it in a variable
const deletedValue = myArray.pop();
// Display the array after deletion
document.getElementById("after").textContent = myArray.join(", ");
// 7
var myArra = ["элемент 1", "элемент 2", "элемент 3"];
document.querySelector(".my-array").textContent = myArra.join(', ');

function addisplayArray4() {
myArra.unshift("новый элемент");
document.querySelector(".my-array").textContent = myArra.join(', ');
}
// 8
var today = new Date();
    var dateElement = document.getElementById("date");
    dateElement.innerHTML = today.toDateString();
// 9
document.getElementById("date2").innerHTML = "11 ноября 2020";
// 10
function displayArray6() {
    var num1 = Math.floor(Math.random() * 51);
    var num2 = Math.floor(Math.random() * 51);
    var result = num1 * num2;
    document.getElementById("result6").innerHTML = "Результат: " + result;
}