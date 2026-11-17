function addition(){
    let a = 10;
    let b = 20;
    let sum = a + b;
    console.log("sum:",sum);

}
addition();

const multiplication = function(){
    let a = 5;
    let b = 4;
    let result = a * b;
    console.log("multiplication",result);

}
multiplication();

// arrow function
const additionArrow = () => {
    let a = 5;
    let b = 10;
    console.log("sum",a+b);

}
additionArrow();

//parameters & arguments
   
    function addition(a,b){
        let sum = a + b;
        console.log("sum:",sum);

    }
    addition(7,10);