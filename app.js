window.addEventListener('load',inicio);
function inicio(){
    ocultarload();
    window.scrollTo(0,1);
}
function ocultarload(){
    let load = document.getElementById('preloading')
    load.classList.add('ocultar');
    load.style.display="none";
}