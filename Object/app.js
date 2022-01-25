let value;

const programmer = {
    name: "asude gürkan",
    age: 21,
    email: "dkslklskfl",
    address: {
        city: "antalya",
        street: "kepez"
    },
    //obje 
   work : function () {
        console.log("programcı çalışıyor");
    }
};
value = programmer;
value = programmer.email;


programmer.work();
const programmers = [
    {name : "fatma", age : 27 },
    {name :"elif", age: 12}
];
vcalue = programmers[0].name;

console.log(value);