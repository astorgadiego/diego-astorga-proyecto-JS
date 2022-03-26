//Finalmente, instancio la Clase Cotizador, pasando los PARAMETROS de inicialización correspondientes
const csh = new  CalculadorCompra(tipoProducto, kilosCantidad, costoKG)

//Lleno los combos tipo y zona vivienda con las funciones que retornan el HTML en cuestión
selectProducto.innerHTML += cargoTipoProducto()
selectCantKilos.innerHTML += cargoCantCuotas()

//Agrego los event listener en el click del botón COTIZAR y el botón REFRESCAR
btnCalcular.addEventListener("click", ()=> calcularCompraTotal())
btnRefrescar.addEventListener("click", ()=> location.reload())