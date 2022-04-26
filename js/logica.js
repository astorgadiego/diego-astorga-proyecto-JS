const cargoTipoProducto = (arr)=> {
    let optionTP=""
    arr.forEach(TipoP =>  
          optionTP += `<option value="${TipoP.precio}">${TipoP.tipo}</option>`
       )
       selectProducto.innerHTML += optionTP
}

const cargoCantKilos = (arr)=> {
    let optionCK=""
    arr.forEach(CantK =>  
          optionCK += `<option value="${CantK.kilos}">${CantK.kilos}</option>`
       )
       selectCantKilos.innerHTML += optionCK
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

const realizarcalculo = ()=>{
    mts = parseInt(cantCuotas.value)
        precioProd = parseFloat(selectProducto.value)
        kilosSelec = parseFloat(selectCantKilos.value)
        valorDeLaCompra = csh.valorCompra(precioProd, kilosSelec);
        valorDelaCuota= csh.valorCuota(valorDeLaCompra,mts)
        valorCuota.innerText = "Cada Cuota de $"+valorDelaCuota;
        linea_cuota.innerText="Su total es $"+valorDeLaCompra;
}

const calcularCompraTotal = ()=> {
    faltanCargarDatos() ? alert("Complete toda la información solicitada para poder usar este servicio.") : realizarcalculo()
    
}


const obtenerDatosTipoProducto = () => {
    fetch(URL)
        .then((response) => 
            response.json()
        )
        .then((data)=>{
            arrayTipoProducto=data
            console.table (arrayTipoProducto)
        })
        .catch((error) => {
            console.error("Se ha producido un error inesperado", error)
  })
  .finally(()=>{
    cargoTipoProducto(arrayTipoProducto)
  })
}

const obtenerDatosCantidadKilos = () => {
    fetch(URL2)
        .then((response) => 
            response.json()
        )
        .then((data)=>{
            arrayCantidadKilos=data
            console.table (arrayCantidadKilos)
            cargoCantKilos(arrayCantidadKilos)
        })
        .catch((error) => {
            console.error("Se ha producido un error inesperado", error)
  })
  .finally(()=>{
    //cargoCantKilos(arrayCantidadKilos)
  })
}