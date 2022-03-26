const cargoTipoProducto = ()=> {
    let optionTP
       for (let TipoP of tipoProducto) {
          optionTP += `<option value="${TipoP.precio}">${TipoP.tipo}</option>`
       }
       return optionTP
}

const cargoCantCuotas = ()=> {
    let optCK
       for (let CK of kilosCantidad) {
          optCK += `<option value="${CK.kilos}">${CK.kilos}</option>`
       }
       return optCK
}

const faltanCargarDatos = ()=> {
    return (isNaN(cantCuotas.value) || selectCantKilos.value.trim() == "" || selectProducto.value.trim() == "")
}

const calcularCompraTotal = ()=> {
    if (faltanCargarDatos()) {
        alert("Complete toda la información solicitada para poder usar este servicio.")
        return
    } else {
        mts = parseInt(cantCuotas.value)
        zonaViv = parseFloat(selectProducto.value)
        tipoViv = parseFloat(selectCantKilos.value)
        valorDeLaCompra = csh.valorCompra(mts, zonaViv, tipoViv);
        valorDelaCuota= csh.valorCuota(valorDeLaCompra,mts)
        valorCuota.innerText = "Cada Cuota de $"+valorDelaCuota;
        linea_cuota.innerText="Su total es $"+valorDeLaCompra;    
        
    }
}