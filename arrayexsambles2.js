let number = [10,20,30,40];
console.log("first element",number[0]);
console.log("first element",[number.length]);

let mark = [30,78,100,6];
mark[2] = 100;
console.log(mark);


let fruits = ["mango","orange","banana"];
for (let index in fruits){
    console.log(index);

}

let students = ["anu","riya","manu"];
for(let index in students){
    console.log(index,students[index]);

}

let marks1 = [25,35,40,65];
let total = 0;
for(let index in marks1){
    total = total + marks1[index];
}
console.log(total);


let firsts = ["mango","orange","banana"];
for(let fruit of fruits){
    console.log(fruit);

}



