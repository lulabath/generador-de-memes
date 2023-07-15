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

//CLASE MODO OSCURO// 

const botonOscuro = document.getElementById('boton-oscuro');
const botonClaro = document.getElementById('boton-claro');

const modoOscuro = document.getElementsByClassName('modo-oscuro');

botonOscuro.addEventListener('click', () => creoModoOscuro());
botonClaro.addEventListener('click', () => creoModoClaro());

const creoModoOscuro = () => {
    document.body.classList.add('modo-oscuro');
    botonOscuro.classList.add('hidden');
    botonClaro.classList.remove('hidden');
}
const creoModoClaro = () => {
    document.body.classList.remove('modo-oscuro');
    botonClaro.classList.add('hidden');
    botonOscuro.classList.remove('hidden');
}

//OCULTAR TEXTOS//
const checkboxSup = document.getElementById('texto-superior');
const checkboxInf = document.getElementById('texto-inferior');

const textoSuperior = document.getElementById('contenedor-texto-sup');
const textoInferior = document.getElementById('contenedor-texto-inf');

const textoSupMeme = document.getElementById("texto-sup-meme");
const textoInfMeme = document.getElementById("texto-inf-meme");

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

//CONTORNO TEXTO//
const sinContorno = document.getElementById("sin-contorno");
const contornoClaro = document.getElementById("contorno-claro");
const contornoOscuro = document.getElementById("contorno-oscuro");

const aplicarSinContorno = () =>{
    textoSupMeme.style.textShadow = 'none';
    textoInfMeme.style.textShadow = 'none';
}
sinContorno.addEventListener('click', () => aplicarSinContorno());

const aplicarContornoClaro = () =>{
    textoSupMeme.style.textShadow = '1px 1px 3px white';
    textoInfMeme.style.textShadow = '1px 1px 3px white';
}
contornoClaro.addEventListener('click', () => aplicarContornoClaro());

const aplicarContornoOscuro = () =>{
    textoSupMeme.style.textShadow = '1px 1px 3px black';
    textoInfMeme.style.textShadow = '1px 1px 3px black';
}
contornoOscuro.addEventListener('click', () => aplicarContornoOscuro());


//URL IMAGEN// 
const inputUrl = document.getElementById('input-url');
const memeImg = document.getElementById('meme-img');
const contenedorEditor = document.getElementById('contenedor-editor');
inputUrl.addEventListener("input", () => changeBackground());

const changeBackground = () => {
    contenedorEditor.style.backgroundImage = `url('${inputUrl.value}')`
    contenedorEditor.style.backgroundSize = `cover`
    contenedorEditor.style.backgroundRepeat = `no-repeat`
    contenedorEditor.style.backgroundPosition = `center`
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

/* funcion descargar meme NO FUNCIONAAA*/
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

//fondo texto//
const  codigoColorFondo = document.getElementById('codigo-color-fondo'); //span//
const colorFondoTexto = document.getElementById("color-fondo-texto");//input//

const cambiarFondoTexto = () => {
    let colorSeleccionado = colorFondoTexto.value;
    codigoColorFondo.innerHTML = `${colorSeleccionado}`;
    textoSupMeme.style.backgroundColor = `${colorSeleccionado}`;
    textoSuperior.style.backgroundColor = `${colorSeleccionado}`;
    textoInfMeme.style.backgroundColor = `${colorSeleccionado}`;
    textoInferior.style.backgroundColor = `${colorSeleccionado}`;
};

colorFondoTexto.addEventListener("input", () => cambiarFondoTexto());





//CHECKED FONDO TRANSPARENTE

const checkTransparente = document.getElementById("fondo-transparente");

const fondoTransparente = () => {
    if(checkTransparente.checked){
        textoInferior.style.backgroundColor = 'transparent';
        textoInfMeme.style.backgroundColor = 'transparent';
        textoSupMeme.style.backgroundColor = 'transparent';
        textoSuperior.style.backgroundColor = 'transparent';
        }else{
            textoInferior.style.backgroundColor = colorFondoTexto.value ;
            textoInfMeme.style.backgroundColor = colorFondoTexto.value ;
            textoSupMeme.style.backgroundColor = colorFondoTexto.value;
            textoSuperior.style.backgroundColor = colorFondoTexto.value;
            console.log('hola')
        }
}
checkTransparente.addEventListener("change", () => fondoTransparente());


//FUNCION CAMBIAR TAMANIO DE TEXTO NO FUNCIONAAAA//
const tamanioFuente = document.getElementById('tamanio-fuente');

const cambiarTamanioFuente = () =>{
    let tamanioElegido = (tamanioFuente.value);
    textoInfMeme.style.fontSize = `${tamanioElegido.value}px`;
    textoSupMeme.style.fontSize = `${tamanioElegido.value}px`;
    console.log('hola')
}
tamanioFuente.addEventListener("click", () => cambiarTamanioFuente());



//FUNCION ESCRIBIR TEXTO//
const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");

const texto = () =>{
    textoSupMeme.innerText = topTextInput.value;
    textoInfMeme.innerText = bottomTextInput.value;
}
topTextInput.addEventListener("input", () => texto());
bottomTextInput.addEventListener("input", () => texto());


//INTERLINEADO texto//
const interlineado = document.getElementById('interlineado');
interlineado.addEventListener("change", () => interlineadoDeTexto());

const interlineadoDeTexto = () =>{
    textoInfMeme.style.lineHeight = `${interlineado.value}`;
    textoSupMeme.style.lineHeight = `${interlineado.value}`;
}


// ESPACIADO DE TEXTO  REVISAR POR QUÉ NO SE REFLEJA EL CAMBIO//
const espaciado = document.getElementById("espaciado");
espaciado.addEventListener("change", () => espaciadoDeTexto());

const espaciadoDeTexto = () => {
    textoInfMeme.style.padding = `${espaciado.value}`;
    textoSupMeme.style.padding = `${espaciado.value}`;
}



//FUNCION DE SELECT TEXTO//    
const selectFuente = document.getElementById("select-texto");

const cambiarFuente = () => {
    textoSupMeme.style.fontFamily = `${selectFuente.value}`;
    textoInfMeme.style.fontFamily = `${selectFuente.value}`;
};

selectFuente.addEventListener("change", () => cambiarFuente());


//FUNCION ALINEAR TEXTO //
const botonAlineadoIzq = document.getElementById("boton-alineado-izq");
const botonAlineadoCentro = document.getElementById("boton-alineado-centro");
const botonAlineadoDer = document.getElementById("boton-alineado-der");

botonAlineadoIzq.addEventListener("click", () =>{
    textoSupMeme.style.textAlign = 'left';
    textoInfMeme.style.textAlign = 'left';
});

botonAlineadoCentro.addEventListener("click", () =>{
    textoSupMeme.style.textAlign = 'center';
    textoInfMeme.style.textAlign = 'center';
});

botonAlineadoDer.addEventListener("click", () =>{
    textoSupMeme.style.textAlign = 'right';
    textoInfMeme.style.textAlign = 'right';
});
