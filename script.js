var two  = document.querySelectorAll(".col");

two.forEach(elemanlar =>{
    let number1 = Math.floor(Math.random() * 256)
    let number2 = Math.floor(Math.random() * 256)
    let number3 = Math.floor(Math.random() * 256)
    elemanlar.style.backgroundColor = `rgb(${number1},${number2}, ${number3})`;
})



