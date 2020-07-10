let compras = []
let productos = []
let agregarCompra = () => {
    let inputPrecio = document.getElementById("precio-producto").value;
    compras.push(inputPrecio);
    let inputCompra = document.getElementById("producto").value;
    productos.push(inputCompra);

    let listaProductos = document.querySelector("#lista");
    let mostrarLista = document.createElement("li")
    mostrarLista.innerHTML = inputCompra + ": $" + inputPrecio + " ";
    listaProductos.appendChild(mostrarLista)

    document.getElementById("precio-producto").value = "";
    document.getElementById("producto").value = "";
}

let borrarUltimo = () => {
    compras.pop();
    productos.pop();
    let listaProductos = document.querySelector("#lista");
    listaProductos.removeChild(listaProductos.lastChild);
}

let borrarTodos = () => {
    compras = [];
    productos = [];
    let listaProductos = document.querySelector("#lista");
    listaProductos.parentNode.removeChild(listaProductos);
}

let calcularTotal = () => {
    let suma = 0
    for (let index = 0; index < compras.length; index++) {
        suma = suma + parseInt(compras[index])
    }
    let totalCompra = document.querySelector("h2");
    totalCompra.innerHTML = "$ " + suma;

}



let botonAgregar = document.getElementById("agregar-compra");
botonAgregar.addEventListener("click", agregarCompra);

let botonBorrarUltimo = document.getElementById("borrar-ultimo");
botonBorrarUltimo.addEventListener("click", borrarUltimo);

let botonTotal = document.getElementById("calcular-total");
botonTotal.addEventListener("click", calcularTotal);

let botonBorrarTodos = document.getElementById("borrar-todos");
botonBorrarTodos.addEventListener("click", borrarTodos);