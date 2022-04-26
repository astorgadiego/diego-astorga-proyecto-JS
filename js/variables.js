const selectProducto=document.querySelector("#selectProducto");
const selectCantKilos=document.querySelector("#selectCantKilos");

const cantCuotas=document.querySelector("#cantCuotas");
const btnCalcular=document.querySelector("#btnCalcular");
const btnRefrescar = document.querySelector("#btnRefrescar");
const valorCuota = document.querySelector("#valorCuota");
const linea_cuota=document.querySelector("#linea_cuota")

const URL = "js/tipo.producto.json"
const URL2 ="js/kilos.cantidad.json"
let arrayTipoProducto =""
let arrayCantidadKilos=""