const btnComprarLeche = document.getElementById("btn-1")
const btnComprarQueso = document.getElementById("btn-2")
const btnComprarManteca = document.getElementById("btn-3")
const btnComprarHuevo = document.getElementById("btn-4")
const btnComprarSoda = document.getElementById("btn-5")
const btnTotal = document.getElementById("btn-total")
const btnConfirmar = document.getElementById("btn-confirmar")
const mostrarLista = document.getElementById("MostrarLista")
const total = document.getElementById("total")
const mostrarUnProducto = document.getElementById("mostrarUnProducto")

const precioLeche = 150;
const precioQueso = 600;
const precioManteca = 200;
const precioHuevo = 300;
const precioSoda = 150;



const listaProd =[];
const precio = [];


btnComprarLeche.addEventListener( "click", () => {
    listaProd.push(btnComprarLeche.value)
    precio.push(eval("precio"+`${btnComprarLeche.value}`))

})

btnComprarQueso.addEventListener("click",() => {
    listaProd.push(btnComprarQueso.value)
    precio.push(eval("precio"+`${btnComprarQueso.value}`))
})

btnComprarManteca.addEventListener("click",() => {
    listaProd.push(btnComprarManteca.value)
    precio.push(eval("precio"+`${btnComprarManteca.value}`))
})

btnComprarHuevo.addEventListener("click",() => {
    listaProd.push(btnComprarHuevo.value)
    precio.push(eval("precio"+`${btnComprarHuevo.value}`))
})

btnComprarSoda.addEventListener("click",() => {
    listaProd.push(btnComprarSoda.value)
    precio.push(eval("precio"+`${btnComprarSoda.value}`))
})



function boton(className){
    var elements = document.getElementsByClassName(className);
    for(let i = 0; i < 5 ; i++) {
        elements[i].addEventListener("click",  () =>{
            mostrarUnProducto.innerHTML = `<h2><span>Ultimo producto : </span>  ${elements[i].value}</h2>`
            
        })
    }}

boton("btn")

class OtroObjeto  {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const objeto = [];
let cantidadFinal = 0;

btnTotal.addEventListener("click", () => {
    mostrarLista.innerHTML = '<h3>Listado de todos los productos</h3>';
for (let i = 0; i < listaProd.length; i++) {
 
objeto.push(new OtroObjeto(listaProd[i],precio[i]))

    mostrarLista.innerHTML += `
    <p><strong>Producto: </strong>${listaProd[i]} ${precio[i]} </p>`

}
sumaTotal()
btnTotal.style.display = "none" 
}
)

function sumaTotal() {
for  (  let i = 0; i < precio.length; i++) {
    cantidadFinal += precio[i] 
total.innerHTML = `<h2><span>El total es: </span>${cantidadFinal}</h2>`
}}


btnConfirmar.addEventListener("click", () => {

    if (objeto.length === 0) {

        Swal.fire(
            'Carro Vacio!',
            'Porfavor ! Debe agregar productos',
            'Error'
          )
        
    } else {
        Swal.fire(
            'Muchas Gracias!!!',
            'Su compra ha sido exitosa',
            'Exito'
          )
        
    }
})

