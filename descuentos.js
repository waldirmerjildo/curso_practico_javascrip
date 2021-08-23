function preciocondescuento(precio,descuento){
   
       const preciof = ((100 - descuento)/100)* precio
       return preciof
   
}


function calcularPrecio(){
    let inputprecio = document.getElementById("precio").value
    let inputdescuento = document.getElementById("descuento").value
    
    if( 0 <= inputdescuento && inputdescuento <= 100){
        const preciofinal = preciocondescuento(inputprecio,inputdescuento)
        document.getElementById("preciofinal").value = "El precio final es:" + preciofinal
        // otro modo
        const ResultP = document.getElementById("ResulPrice")
        ResultP.innerText = "El precio con descuento es: " + preciofinal
    }else{
        return "el descuemto no es valido"
    }

}