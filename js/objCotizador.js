class CalculadorCompra {
    constructor (jsonTP, jsonKC, costoKG) {
       this.arrayTipoProducto = jsonTP //podría guardar los array para aplicar una 
       this.arrayKilosCantidad = jsonKC //búsqueda o filtro, y devolver el resultado
       this.costoKG = costoKG;
    }
    valorCompra(KGi, precioproducto, kilos) {
       const tot = parseFloat(kilos) * parseFloat(precioproducto)
             return tot.toFixed(2)
    }
    valorCuota(total,cuotalelegida) {
        const cuo = parseFloat(total)/parseFloat(cuotalelegida)
              return cuo.toFixed(2)
     }
    // obtenerFactorZV(zonaVivienda) { //opcional
    //    const array = this.arrayZonaVivienda
    //          let resultado = array.find(arr => arr.area == zonaVivienda)
    //          return resultado.factor
    // }
 }