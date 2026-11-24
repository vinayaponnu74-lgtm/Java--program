// foreach,map,filter

 //foreach
 
     let students = ["manu","sanu","anu"];
     students.forEach(function(name){
console.log(name);

     });

 //map
 
 let number = [2,4,66,8,10];
 let result = number.map(function(num){
return num * 2;

 });
 console.log(result);

 let name = ["anu","manu","sanu","reenu"];
 let girls = name.map(function(name){
return name.toUpperCase();

 });
 console.log(girls);

 //filter
  
 let number1 = [10,15,20,4,60,80];
 let digit = number1.filter(function(num){
    return num > 15;
 });
 console.log(digit);

 let numbers2 = [5,20,35,45,55];
 let digits = numbers2.filter(function(num){
    return num % 2 === 0;

 });
 console.log(digits); 
