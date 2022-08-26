/*

alert("Escriba los productos que desee comprar de la siguiente lista: \n 1. Leche \n 2. Cafe \n 3. Azucar  \n 4. Gaseosa  \n 5. Soda \n 6. Manteca  ")


var entradaDeProductos = prompt("ingrese un producto"); // definimos la variable

const productos_ = []; /// hacemos un array vacio
// usamos un while para pushear los elementos 
while (entradaDeProductos != "ESC") {

    productos_.push(entradaDeProductos);
    entradaDeProductos = prompt("ingrese otro producto o ESC para salir");
}

const canti = [];

productos_.forEach(dato => {  
     cantidadDeCadaUno = canti.push(Number(prompt(`cuantos ${dato} necesita`)))  
});

//lista de precios

 const precioLeche = 150;
 const precioCafe = 600;
 const precioAzucar = 200;
 const precioGaseosa = 300;
 const precioSoda = 150;
 const precioManteca = 180;


const precio = [];
// la unica manera que se me ocurrio de pusher el precio a cada elemento.
productos_.forEach(valor => {
    precioCadaUno = precio.push(eval("precio"+`${valor}`))

})

//console.log(precio)


var objeto = [];


for (let i = 0; i < productos_.length; i++) {
     objeto[i] = {nombre :`${productos_[i]}`, cantidad : canti[i], precio:precio[i] , total : canti[i]*precio[i]

}  
  
}

console.log(objeto)


const valorInicial = 0;
const cantidadFinal = canti.reduce((acumulador,dato) => acumulador + dato, valorInicial) 




const totalArray =[];

objeto.forEach(element => {
    elementArray = totalArray.push(element.total)
});

console.log(totalArray)
///// luego me falta sumar sobre el array y listo

let totalSuma = 0
for (let i = 0; i < totalArray.length; i++) {
     totalSuma += totalArray[i]
    
}

console.log(totalSuma)


confirm(`confirma la compra de ${cantidadFinal} productos con un total de $${totalSuma} para proceder`) 





let lista1 = document.getElementById("listaProductos") // selecciono el nodo padre



for (const dato of productos_) {
    //crear el nodo li para imprimir el array e imprimirlo en el UL padre en cada iteracion
    let li = document.createElement("li")
    li.innerHTML = dato
    lista1.appendChild(li)
}

let lista2 = document.getElementById("listaCantidad")

for (const dato of canti) {
    //crear el nodo li para imprimir el array e imprimirlo en el UL padre en cada iteracion
    let li = document.createElement("li")
    li.innerHTML = dato
    lista2.appendChild(li)
}

let lista3 = document.getElementById("listaPrecio")

for (const dato of precio) {
    
    let li = document.createElement("li")
    li.innerHTML = dato
    lista3.appendChild(li)
}


let total1 = document.getElementById("totales")

total1.innerHTML = `<p> Total : $ ${totalSuma}</p>`


//confirm(`confirma la compra de ${cantidadFinal} productos con un total de $${totalSuma} para proceder`) 




// Luego si me falto un producto agrego asi 

/*
class OtroObjeto  {
    constructor(nombre, cantidad,precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    //el metodo 
    total() {
        return this.cantidad*this.precio
    }
}

const otroObjeto1 = new OtroObjeto ("carne",2,200)

console.log(otroObjeto1)
console.log(otroObjeto1.total())
*/


//const leche = productos_.includes("Leche")
//console.log(leche)  //True  
//const result = productos_.filter(palabra => result.includes(`${productos_}`))
//console.log(result)

//const nombre = objeto.filter(palabra => palabra.nombre.includes("Leche"))
//console.log(nombre)



// confirm("confirma la compra para proceder") 



class OtroObjeto  {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}


const listaProductos = [];

let productosLista = document.getElementById("productoTodos");

function seleccionarProducto() {

    let datos = document.getElementById("productoTodos").value

    document.getElementById("resultado").innerHTML = `Usted selecciono el producto ${datos}, proceda a seleccionar la cantidad`

}

productosLista.onchange = seleccionarProducto



/*
let formulario = document.getElementById("form");

formulario.addEventListener("submit", datosForm)


function datosForm(e) {
    e.preventDefault();

    let data = e.target
    // obtenemos los datos ingresados en el evento
    console.log(data.children[0].value)

}
*/


let total = document.getElementById("total")
let totales = document.getElementById("totales");

total.addEventListener("click", () => {

    let datos = document.getElementById("productoTodos").value

    let formulario = document.getElementById("form");

    formulario.addEventListener("submit", datosForm)


    function datosForm(e) {
        e.preventDefault();

        var data = e.target
      
        totales.innerHTML = `<p>Agregaste ${datos} y la cantidad es ${data.children[0].value}</p>`

        listaProductos.push(new OtroObjeto(datos,data.children[0].value,))

        console.log(listaProductos)

    }


})
