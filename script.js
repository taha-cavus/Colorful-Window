var two  = document.querySelectorAll(".col-1");

function deneme(){
    two.forEach(elemanlar =>{
        let number1 = Math.floor(Math.random() * 256)
        let number2 = Math.floor(Math.random() * 256)
        let number3 = Math.floor(Math.random() * 256)
        elemanlar.style.backgroundColor = `rgb(${number1},${number2}, ${number3})`;
    })
}   
const taha = setInterval(deneme,1000)

function myStop() {
    clearInterval(taha);
}


var zaman;
var sayac=0;
function durdur(){

    window.clearInterval(zaman); }
function saydir(){

    sayac++;
    document.getElementById('icerik').innerHTML=sayac;


}
var zaman=window.setInterval('saydir()',1000);
