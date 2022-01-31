//while loops

let i = 0;

while(i < 10)
{
    console.log(i);
    i++;
}

while(i > 10)
{
    console.log(i);
    i--;
}

//BREAK VE CONTINUE

let i = 0;


while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}

while (i < 10) {
    if (i == 3 || i == 5) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

///DO WHILE LOOPS

let i = 0;
do{
    console.log(i);
    i++;
}
while(i<10);

const langs=["python", "js", "java"];

    let index = 0;
    while(index < langs.length) {
        console.log(langs[index]);
        index++;
    }

///FOR
    for  ( let index = 0; index < langs.length; index++){
      console.log(langs[index]);  
    }


    ///FOREACH

    langs.forEach(function(langs,index){
        console.log(langs,index);
    });
    ////
    
const users= [
    {name: "asude" , age: 21},
    {name:"aslı" , age: 27},
    {name: "ali" , age: 29}

];

const names = users.map(function(users){
    return users.name;
});
const ages = users.map(function(users){
    return users.age;
});
console.log(names);
console.log(ages);

///FOR IN

const user = {
    name: "asude",
    age: 21
};

for (let key in user) {
    console.log(key,user[key]);
}