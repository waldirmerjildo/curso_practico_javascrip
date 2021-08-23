function elegir(){
    const eleccion = document.getElementById('interesselector').value
    if(eleccion == 1){
        return intsimple()
    } else {
        return intcompuesto()
    }
}
// interes simple
function  intsimple() {
    var inversion = document.getElementById('inversion').value
    var interes = document.getElementById('interes').value
    var tiempo = document.getElementById('tiempo').value
    if ((inversion && interes && tiempo) != "" && (inversion && interes && tiempo) >= 0 ){
        const porcentaje = interes / 100
        const interssimple = tiempo * porcentaje * inversion
        document.getElementById('respuesta').innerHTML = interssimple  + parseInt(inversion)
    } else {
        document.getElementById('respuesta').innerHTML = "error en los datos"
    }
    
    
}

// inters compuesto

function intcompuesto() {

    var inversion = document.getElementById('inversion').value
    var interes = document.getElementById('interes').value
    var tiempo = document.getElementById('tiempo').value
    if ((inversion && interes && tiempo) != "" && (inversion && interes && tiempo) >= 0 ){
        const porcentaje = interes / 100
        // cf = ci *(1 +i)^n
        const interescompuesto = inversion * ((1 + porcentaje)** tiempo)
        document.getElementById('respuesta').innerHTML =parseInt(interescompuesto)
    } else {
        document.getElementById('respuesta').innerHTML = "error en los datos"
    }
    
    
}

function borrar(){
    document.getElementById('inversion').value = ""
    document.getElementById('interes').value = ""
    document.getElementById('tiempo').value = ""
    document.getElementById('respuesta').innerHTML = ""
}



