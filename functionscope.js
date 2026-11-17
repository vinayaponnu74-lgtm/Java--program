//globalscope
let name = "sruthi";
function displayname(){
    console.log(name);

}
displayname();
console.log(name);

        // functionscope

function showdetails(){
    let name = "anu";
    let age = 20;
    console.log(name);
    console.log(age);

}
showdetails();

// Blocke scope
    
     if(true){
        let age = 25;
        const name = "anu";
        var city = "kochi";
         
        console.log(age);
        console.log(name);
        console.log(city);
        
     }