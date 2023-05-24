const btnop1 = document.getElementById('btn-square')
const btnop2 = document.getElementById('btn-rectangle')
const cont = document.getElementById('container')
const op2Text = document.getElementById('op-keliling')
const opTextSquare = document.getElementById('op-text-square')
const opTextRectangle = document.getElementById('op-text-rectangle')
const resultKeliling = document.getElementById('output-keliling')

btnop1.addEventListener('click', () => {
    if(opTextSquare.style.display == '') {
        cont.style.display = 'block';
        opTextSquare.style.display = 'flex'; 
        opTextRectangle.style.display = '';
        btnop1.style.backgroundColor = 'white';
        btnop1.style.color = 'black';
        btnop2.style.backgroundColor = '#5297FF';
        btnop2.style.color = 'white'; 
    } else if(opTextSquare.style.display == 'flex') {
        opTextSquare.style.display = ''
        cont.style.display = 'none';
        btnop1.style.backgroundColor = '#5297FF';
        btnop1.style.color = 'white';
    } 
}); 

btnop2.addEventListener('click', () => {
    if(opTextRectangle.style.display == '') {
        cont.style.display = 'block';
        opTextRectangle.style.display = 'flex';
        opTextSquare.style.display = '';
        btnop2.style.backgroundColor = 'white';
        btnop2.style.color = 'black';
        btnop1.style.backgroundColor = '#5297FF';
        btnop1.style.color = 'white'; 
    } else if( opTextRectangle.style.display = 'flex') {
        opTextRectangle.style.display = '';
        cont.style.display = 'none';
        btnop2.style.backgroundColor = '#5297FF';
        btnop2.style.color = 'white'; 
    } 
}); 



// Rumus-Keliling-Persegi
const multiplyKeliling = function () {
    const numSquareK1 = 4;
    const numSquareK2 = document.getElementById('sisi-keliling-persegi').value;

    document.getElementById('output-keliling-persegi').innerHTML = numSquareK1 * numSquareK2;
}

const txt1 = document.getElementById('sisi-keliling-persegi');
const btn1 = document.getElementById('hitung-keliling-persegi');
const out1 = document.getElementById('output-sisi-keliling-persegi');


function fun1() {
    out1.innerHTML = txt1.value;
} 

btn1.addEventListener('click', fun1);


// Rumus-Luas-Persegi
const multiplyLuas = function() {
    const numSquareL1 = document.getElementById('sisi-luas-persegi').value;
    const numSquareL2 = document.getElementById('sisi-luas-persegi').value;

    document.getElementById('output-luas-persegi').innerHTML = numSquareL1 * numSquareL2;
}

const txt2 = document.getElementById('sisi-luas-persegi');
const btn2 = document.getElementById('hitung-luas-persegi');
const outL1 = document.getElementById('output-sisi-luas1-persegi');
const outL2 = document.getElementById('output-sisi-luas2-persegi');

function fun2() {
    outL1.innerHTML = txt2.value;
    outL2.innerHTML = txt2.value;
}

btn2.addEventListener('click', fun2); 

// Rumus Keliling Persegi Panjang
const multiplyKelilingPP = function() {
    const numRectanglePanjangKeliling = document.getElementById('panjang-keliling-persegi-panjang').value;
    const numRectangleLebarKeliling = document.getElementById('lebar-keliling-persegi-panjang').value;

    document.getElementById('output-keliling-persegi-panjang').innerHTML = 2 * numRectanglePanjangKeliling + 2 * numRectangleLebarKeliling;
}

const txt3Panjang = document.getElementById('panjang-keliling-persegi-panjang');
const txt4Lebar = document.getElementById('lebar-keliling-persegi-panjang');
const btn3 = document.getElementById('hitung-keliling-persegi-panjang');
const outPanjangKelilingPP = document.getElementById('output-panjang-keliling-persegi-panjang');
const outLebarKelilingPP = document.getElementById('output-lebar-keliling-persegi-panjang');


function fun3() {
    outPanjangKelilingPP.innerHTML = txt3Panjang.value;
    outLebarKelilingPP.innerHTML = txt4Lebar.value;
}

btn3.addEventListener('click', fun3); 

// Rumus Luas Persegi Panjang
const multiplyLuasPP = function() {
    const numRectanglePanjangLuas = document.getElementById('panjang-luas-persegi-panjang').value;
    const numRectangleLebarLuas = document.getElementById('lebar-luas-persegi-panjang').value;

    document.getElementById('output-luas-persegi-panjang').innerHTML = numRectanglePanjangLuas * numRectangleLebarLuas;
}

const txt5Panjang = document.getElementById('panjang-luas-persegi-panjang');
const txt6Lebar = document.getElementById('lebar-luas-persegi-panjang');
const btn4 = document.getElementById('hitung-luas-persegi-panjang');
const outPanjangLuasPP = document.getElementById('output-panjang-luas-persegi-panjang');
const outLebarLuasPP = document.getElementById('output-lebar-luas-persegi-panjang');


function fun4() {
    outPanjangLuasPP.innerHTML = txt5Panjang.value;
    outLebarLuasPP.innerHTML = txt6Lebar.value;

}

btn4.addEventListener('click', fun4); 

// Penjelasan Jawaban


// Button Reset
let btnReset = document.querySelector('button')
let inputs = document.querySelectorAll('input')

btnReset.addEventListener('click', () =>  {
    inputs.forEach(input => input.value = '');
})


