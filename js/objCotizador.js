class CalculadorCompra {
                        constructor (jsonTP, jsonKC) {
                                                        this.TipoDeProducto = jsonTP ||[{"Error":"Error al obtener el dato"}]
                                                        this.arrayKilosCantidad = jsonKC ||[{"Error":"Error al obtener el dato"}]
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