const guardarSesion=(clave,valor)=>{
    sessionStorage.setItem(clave,valor)
};

guardarSesion("ListaProductos", JSON.stringify(tipoProducto));
guardarSesion("CantidadesDisponibles", JSON.stringify(kilosCantidad));

const almacenados = JSON.parse(sessionStorage.getItem("ListaProductos"));
const productos=[];
for (const objeto of almacenados){
    productos.push(new CalculadorCompra(objeto));
}

console.log(productos)