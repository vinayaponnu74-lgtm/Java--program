function orderdFood(callbaCk) {
    console.log("food ordered");
    
    setTimeout(() =>{
        console.log("food is ready");
        callbaCk();
    },3000);

    
}

function receivedFood(){
 console.log("food is received");

}
orderdFood(receivedFood);


