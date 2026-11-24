let fruits=["orange","banana","apple"];
fruits.push("grape");
console.log(fruits);

let fruits1=["mango","orange","grapr"];
fruits1.pop();
console.log(fruits1);

let fruits2=["mango","orange","grapr"];
fruits2.unshift("pulm");
console.log(fruits2);

let fruits3=["mango","apple","banana","plum"];
fruits3.shift();
console.log(fruits3);

let fruits4=["apple","orange","banana","mango"];
fruits4.splice(1,1);
console.log(fruits4);

let fruits5=["apple","orange","banana","mango","guva"];
let result=fruits5.splice(1,3);
console.log(result);
console.log(fruits5);


let fruits6=["orange","banana","pulm","apple"];
console.log(fruits6.indexOf("banana"));
console.log(fruits6.indexOf("guva"));

   let numbers=[10,20,30,20,50];
   console.log(numbers.lastIndexOf(20));

let fruits7=["apple","orange","banana","mango","guva"];
console.log(fruits7.includes("guva"));
console.log(fruits7.includes("tomato"));

   let numbers1=[10,20,30,20,50];
numbers1.sort((a,b)=>(a-b));
console.log(numbers1);

let fruits8=["apple","orange","banana","mango","guva"];
fruits8.reverse();
console.log(fruits8);




