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

//OCULTAR TEXTOS//
const checkboxSup = document.getElementById('texto-superior');
const checkboxInf = document.getElementById('texto-inferior');

const textoSuperior = document.getElementById('contenedor-texto-sup');
const textoInferior = document.getElementById('contenedor-texto-inf');

const textoSupMeme = document.getElementById("texto-sup-meme");
const textoInfMeme =document.getElementById("texto-inf-meme");

const ocultarTextoSup = () =>{
    console.log(checkboxSup.checked);
    textoSuperior.classList.toggle('hidden');
    textoSupMeme.classList.toggle('hidden');
}

const ocultarTextoInf = () =>{
    console.log(checkboxInf.checked);
    textoInferior.classList.toggle('hidden');
    textoInfMeme.classList.toggle('hidden');
}

checkboxSup.addEventListener('change', () => ocultarTextoSup());
checkboxInf.addEventListener('change', () => ocultarTextoInf());


//URL IMAGEN// 
const inputUrl = document.getElementById('input-url');
const memeImg = document.getElementById('meme-img');

inputUrl.addEventListener("input", () => changeBackground());

const changeBackground = () => {
    memeImg.style.backgroundImage = `url('${inputUrl.value}')`
    memeImg.style.backgroundSize = `cover`
    memeImg.style.backgroundRepeat = `no-repeat`
    memeImg.style.backgroundPosition = `center`
};

//INPUT RANGE//
const inputBrillo = document.getElementById("range-brillo");
const inputOpacidad = document.getElementById("range-opacidad");
const inputContraste = document.getElementById("range-contraste");
const inputDesenfoque = document.getElementById("range-desenfoque");
const inputGrises = document.getElementById("range-grises");
const inputSepia = document.getElementById("range-sepia");
const inputHue = document.getElementById("range-hue");
const inputSaturado = document.getElementById("range-saturado");
const inputNegativo = document.getElementById("range-negativo");

const filtros = () => {
    memeImg.style.filter = `brightness(${inputBrillo.value}) opacity(${inputOpacidad.value}) contrast(${inputContraste.value}%) blur(${inputDesenfoque.value}px) grayscale(${inputGrises.value}%) sepia(${inputSepia.value}%) hue-rotation(${inputHue.value}deg) saturation(${inputSaturado.value}%) invert(${inputNegativo.value})`;
};

inputBrillo.addEventListener("input", () => filtros());
inputOpacidad.addEventListener("input", () => filtros());
inputContraste.addEventListener("input", () => filtros());
inputDesenfoque.addEventListener("input", () => filtros());
inputGrises.addEventListener("input", () => filtros());
inputSepia.addEventListener("input", () => filtros());
inputHue.addEventListener("input", () => filtros());
inputSaturado.addEventListener("input", () => filtros());
inputNegativo.addEventListener("input", () => filtros());

/* funcion descargar meme*/
const botonDescarga = document.getElementById("boton-descargar");
const meme = document.getElementById("contenedor-editor");

botonDescarga.addEventListener("click", () => descargarMeme());

const descargarMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
        window.saveAs(blob, "mi-meme.png");
    });
};


//REESTABLECER FILTROS// 
const botonFiltros = document.getElementById('boton-filtros');

const reestablecerFiltros = () => {
    inputBrillo.value = 1
    inputOpacidad.value = 1
    inputContraste.value = 100
    inputDesenfoque.value = 0
    inputGrises.value = 0
    inputSepia.value = 0
    inputHue.value = 0
    inputSaturado.value = 100
    inputNegativo.value = 1
}

botonFiltros.addEventListener('click', () => reestablecerFiltros());


// codigo color//
const codigoColorImg = document.getElementById('codigo-color-img'); //span//

const colorFondoImg = document.getElementById('color-fondo-img');//input//

const cambiarFondoMeme = () => {
    let colorSeleccionado = colorFondoImg.value;
    codigoColorImg.innerHTML = `${colorSeleccionado}`;
    memeImg.style.backgroundColor = `${colorSeleccionado}`;
};
colorFondoImg.addEventListener('input', () => cambiarFondoMeme());

//input color texto//
const codigoColorTexto = document.getElementById('codigo-color-texto')//span//
const colorTexto = document.getElementById('color-texto');//input//

const cambiarColorTexto = () => {
    let colorSeleccionado = colorTexto.value;
    codigoColorTexto.innerHTML = `${colorSeleccionado}`;
    textoSupMeme.style.color = `${colorSeleccionado}`;
    textoInfMeme.style.color = `${colorSeleccionado}`;
};
colorTexto.addEventListener('input', () => cambiarColorTexto())

//fondo texto REVISAR POR QUÉ NO FUNCIONA//
const  codigoColorFondo = document.getElementById('codigo-color-fondo'); //span//
const colorFondoTexto = document.getElementById("color-fondo-texto");//input//

const cambiarFondoTexto = () => {
    let colorSeleccionado = colorFondoTexto.value;
    codigoColorFondo.innerHTML = `${colorSeleccionado}`;
};

colorFondoTexto.addEventListener("input", () => cambiarFondoTexto);

//FUNCION DE SELECT TEXTO//    
const selectFuente = document.getElementById("select-fuente");
const cambiarFuente = () => {
    textoSuperior.style.fontFamily = `${selectFuente.value}`;
    textoInferior.style.fontFamily = `${selectFuente.value}`;
};

selectFuente.addEventListener('change', () => cambiarFuente());

//FUNCION SELECT FONDO IMG//
const selectImg = document.getElementById("select-fondo-imagen");

const cambiarFondoImg = () => {

}
