// fonksiyon tanımlama

function hi(name = "bilgi yok",age= "bilgi yok"){

    // if (typeof name === "undefined") name="bilgi yok";
    // if (typeof age === "undefined") age="bilgi yok";
    console.log(`isim: ${name} yaş: ${age}`);
}

hi("asude", 20); // fonksiyon çağrısı (function call)

hi();

hi("fatih");

//return kullanımı

function square(x){
    
    return x*x;
}

function cube(x){
   return x*x*x;
}

let a = cube(square(12));

console.log(a);

//function expression

const merhaba = function(name){
    console.log("selam "  + name);
};
merhaba("asude");

//immediately invoked function expression (IIFE)

(function(name){
    console.log("selam: " + name);
})("Asude");

//
const database = {
    host:"localhost",
    add: function(){
        console.log("eklendi");
    },
    get:function(){
        console.log("elde edildi");
    },
    update: function(id){
        console.log(`id: ${id} güncellendi`);
    },
    delete : function(id){
        console.log(`id: ${id} silindi`);
    }
}
console.log(database.host);
database.add();

database.get();

database.delete(10);