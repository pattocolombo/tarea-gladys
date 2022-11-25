const carrito= document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const vaciarCarritobtn=document.querySelector('#vaciar-carrito');
const listaCursos=document.querySelector('#lista-cursos');
let articulosCarrito=[];


cargarEventListeners();
function cargarEventListeners() {
    listaCursos.addEventListener('click',agregarCurso);
}

function  agregarCurso(e){
   e.preventDefault();
if(e.target.classList.contains('agregar-carrito')) {
    const seleccionado=e.target.parentElement.parentElement;
    leerdatoscurso(seleccionado);

}
}