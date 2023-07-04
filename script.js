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

//clases modo oscuro// 

const botonOscuro = document.getElementById('boton-oscuro');
const botonClaro = document.getElementById('boton-claro');
const modoOscuro = document.getElementsByClassName('modo-oscuro');

botonOscuro.addEventListener('click', ()=> creoModoOscuro());
botonClaro.addEventListener('click', ()=> creoModoClaro());

/*
const creoModoOscuro= () => {
    document.body.classList.add('modo-oscuro');
}
const creoModoClaro= () => {
    document.body.classList.remove('modo-oscuro');
}
const creoModoOscuro= () => {
    document.header.classList.add('modo-oscuro');
}
const creoModoClaro= () => {
    document.header.classList.remove('modo-oscuro');
}const creoModoOscuro= () => {
    document.aside.classList.add('modo-oscuro');
}
const creoModoClaro= () => {
    document.aside.classList.remove('modo-oscuro');
}
*/


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
    memeImg.style.filter = `brightness(${e.target.value})`;
    memeImg.style.filter = `opacity(${e.target.value})`;
    memeImg.style.filter = `contrast(${e.target.value}%)`;
    memeImg.style.filter = `blur(${e.target.value}px)`
    memeImg.style.filter = `grayscale(${e.target.value}%)`
    memeImg.style.filter = `sepia(${e.target.value}%)` 
    memeImg.style.filter = `hue-rotation(${e.target.value}deg)` 
    memeImg.style.filter = `saturation(${e.target.value}%)`
    memeImg.style.filter = `invert(${e.target.value})`
}
inputBrillo.addEventListener('input', (e)=> filtros(e));
inputOpacidad.addEventListener('input',(e)=> filtros(e));
inputContraste.addEventListener('input', (e)=> filtros(e));
inputDesenfoque.addEventListener('input',(e)=> filtros(e));
inputGrises.addEventListener('input',(e)=> filtros(e));
inputSepia.addEventListener('input', (e)=> filtros(e));
inputHue.addEventListener('input', (e)=> filtros(e));
inputSaturado.addEventListener('input', (e)=> filtros(e));
inputNegativo.addEventListener('input', (e)=> filtros(e));

