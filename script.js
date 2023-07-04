const botonTexto = document.getElementById('boton-aside-texto');
const botonImagen = document.getElementById('boton-aside-imagen');

const asideTexto = document.getElementById('aside-texto');
const asideImg = document.getElementById('aside-img');

botonTexto.addEventListener('click', ()=> hideImgAside());
botonImagen.addEventListener('click', ()=> hideTextoAside());

const hideTextoAside = () => {
    asideTexto.classList.add('hidden');
    asideImg.classList.remove('hidden');
}
const hideImgAside = () => {
    asideImg.classList.add('hidden');
    asideTexto.classList.remove('hidden');
}

//URL IMAGEN// 
const inputUrl = document.getElementById('input-url');
const memeImg = document.getElementById('meme-img');

inputUrl.addEventListener('input', (e)=> changeBackground(e))

const changeBackground = (e) => {
    console.log(e.target.value)
    memeImg.style.backgroundImage = `url('${e.target.value}')`
}

//INPUT RANGE//
const inputBrillo = document.getElementById('range-brillo');
const inputOpacidad = document.getElementById('range-opacidad');
const inputContraste = document.getElementById('range-contraste');
const inputDesenfoque = document.getElementById('range-desenfoque');
const inputGrises = document.getElementById('range-grises');
const inputSepia = document.getElementById('range-sepia');
const inputHue = document.getElementById('range-hue');
const inputSaturado = document.getElementById('range-saturado');
const inputNegativo = document.getElementById('range-negativo');


const filtros = (e) =>{
    console.log(e.target.value)
    memeImg.style.filter = `brightness(${e.target.value})`
}

inputBrillo.addEventListener('input', (e)=> filtros(e));
inputContraste.addEventListener('input', (e)=> filtros(e));
