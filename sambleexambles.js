//false,0,-0,big0,"",null,undefined,nan -- falsy values
//true,1,-1,"hello","zero"," ","false",[],{},function(){} --true values

let value=0;
if(value)
{
    console.log("truthyvalue");
}
else{
    console.log("falsy value");

}

let name="";
if (name){
    console.log("name is available");

}
else{
    console.log("name is emty");
}

let fruits=[];
if(fruits){
    console.log("array is truthy");

}

else{
    console.log("array is false");

}

let students={};
if (students){
    console.log("object is truthy");
}
else{
    console.log("object  is false");
    
}

let a =null;
let b;
if(a){
    console.log("a is truthy");

}
else{
    console.log("a is falsy");
}
if(b){
    console.log("b is truthy");
}
else{
    console.log("b is falsy");
}
console.log(Boolean(10));
console.log(Boolean(0));
console.log(Boolean(null));


let username="";
if(username){
    console.log("login successfull");
}
else{
    console.log("pleace enter username");
}









