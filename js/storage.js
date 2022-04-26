const guardarSesion=(clave,valor)=>{
    localStorage.setItem(clave,valor)
};

guardarSesion("ListaProductos", JSON.stringify(arrayTipoProducto));
guardarSesion("CantidadesDisponibles", JSON.stringify(arrayCantidadKilos));

const almacenados = JSON.parse(localStorage.getItem("ListaProductos"));
const productos=[];
for (const objeto of almacenados){
    productos.push(new CalculadorCompra(objeto));
}

console.log(productos)
