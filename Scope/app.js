//SCOPE KAVRAMI

// //Global Scope





// function a() {
// //Function Scope

// }


// if (){

//     //Block Scope
// }

var value1 = 10;
let value2= 20;
const value3 = 30;

function Func(){
    var value1 = 40;
let value2= 50;
const value3 = 60;

console.log(value1,value2,value3);

}

Func();

if(true)
{
    var value1= 40;
    let value2 =50;
    const value3 = 60;

    console.log(value1,value2,value3);
}


console.log(value1,value2,value3);