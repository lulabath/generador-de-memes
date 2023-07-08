/* ASIDE TEXTO E IMAGEN Y CLASS HIDDEN*/

const botonTexto = document.getElementById('boton-aside-texto');
const botonImagen = document.getElementById('boton-aside-imagen');

const asideTexto = document.getElementById('aside-texto');
const asideImg = document.getElementById('aside-img');

botonTexto.addEventListener('click', () => hideImgAside());
botonImagen.addEventListener('click', () => hideTextoAside());

const hideTextoAside = () => {
    asideTexto.classList.add('hidden');
    asideImg.classList.remove('hidden');
}
const hideImgAside = () => {
    asideImg.classList.add('hidden');
    asideTexto.classList.remove('hidden');
}



/*CRUZ Y ESCONDER ASIDE*/

const cruzAsideTexto = document.getElementById('cruz-aside-texto');
const cruzAsideImg = document.getElementById('cruz-aside-img');

cruzAsideImg.addEventListener('click', () => hideAside());
cruzAsideTexto.addEventListener('click', () => hideAside());

const hideAside = () => {
    asideTexto.classList.add('hidden');
    asideImg.classList.add('hidden');
}





//clases modo oscuro// 

const botonOscuro = document.getElementById('boton-oscuro');
const botonClaro = document.getElementById('boton-claro');

const modoOscuro = document.getElementsByClassName('modo-oscuro');

botonOscuro.addEventListener('click', () => creoModoOscuro());
botonClaro.addEventListener('click', () => creoModoClaro());

const creoModoOscuro = () => {
    document.body.classList.add('modo-oscuro');
}
const creoModoClaro = () => {
    document.body.classList.remove('modo-oscuro');
}

//URL IMAGEN// 
const inputUrl = document.getElementById('input-url');
const memeImg = document.getElementById('meme-img');

inputUrl.addEventListener('input', (e) => changeBackground(e))

const changeBackground = (e) => {
    console.log(e.target.value)
    memeImg.style.backgroundImage = `url('${e.target.value}')`
    memeImg.style.backgroundSize = `cover`
    memeImg.style.backgroundRepeat = `no-repeat`
    memeImg.style.backgroundPosition = `center`
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

const filtros = () => {
    console.log(filtros)
    memeImg.style.filter = `brightness(${inputBrillo.value}) opacity(${inputOpacidad.value}) contrast(${inputContraste.value}%) blur(${inputDesenfoque.value}px) grayscale(${inputGrises.value}%) sepia(${inputSepia.value}%) hue-rotation(${inputHue.value}deg) saturation(${inputSaturado.value}%) invert(${inputNegativo.value})`;
}
inputBrillo.addEventListener('input', () => filtros());
inputOpacidad.addEventListener('input', () => filtros());
inputContraste.addEventListener('input', () => filtros());
inputDesenfoque.addEventListener('input', () => filtros());
inputGrises.addEventListener('input', () => filtros());
inputSepia.addEventListener('input', () => filtros());
inputHue.addEventListener('input', () => filtros());
inputSaturado.addEventListener('input', () => filtros());
inputNegativo.addEventListener('input', () => filtros());

/* funcion descargar meme*/
const botonDescarga = document.getElementById("boton-descargar");
const meme = document.getElementById("contenedor-editor");

botonDescarga.addEventListener("click", () => descargarMeme());

const descargarMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
        window.saveAs(blob, "mi-meme.png");
    });
};
console.log(descargarMeme);