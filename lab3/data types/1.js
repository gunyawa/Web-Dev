let a = +prompt("Введите 1-ое число", "");
let b = +prompt("Введите 2-ое число", "");

alert( a + b );

//2---------------------------------------

function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
}
  
alert(`Число: ${readNumber()}`);

//3--------------------------------------------

let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert( i );
}

//4-----------------------------------------------

function random(min, max) {
    return min + Math.random() * (max - min);
}
  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

//5-------------------------------------------------

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
  
alert( randomInteger(1, 3) );