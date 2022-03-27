class CalculadorCompra {
    constructor (jsonTP, jsonKC) {
       this.arrayTipoProducto = jsonTP 
       this.arrayKilosCantidad = jsonKC 
    }
    valorCompra(precioproducto, kilos) {
       const tot = parseFloat(kilos) * parseFloat(precioproducto)
             return tot.toFixed(2)
    }
    valorCuota(total,cuotalelegida) {
        const cuo = parseFloat(total)/parseFloat(cuotalelegida)
              return cuo.toFixed(2)
     }
 }