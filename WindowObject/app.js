//ALERT

alert("selam");
// CONFIRM 
console.log(cevap);  //tamam -> true , iptal -> false

if (confirm( "emin misiniz?")){
    console.log("siliniz");

}

else{
    console.log("silmeyiniz");}

// PROMPT
const cevap = prompt("2+2=?");

if(cevap == "4"){
    console.log("doğru");
}

else {
    console.log("yanlış");
}

let value ;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

// window.location.reload()
if(confirm("sayfa tenilensin mi?")){
    window.location.reload();
}
else{
    console.log("yenilenmedi");
}


value = window.scrollX;

value = window.scrollY;
console.log(value);
