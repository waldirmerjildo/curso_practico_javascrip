// el codigo del cuadrado
console.group("cuadrado");
// const ladocuadrado = 5;
// console.log("los lados del cuadrado mide "+ ladocuadrado + "cm")

function perimetrocuadrado(lado){
    return lado * 4
}


// console.log("el perimertro del cuadrado es " + periemrtorcuadrado + "cm")

function areacuadrado(lado){
    return lado * lado
}

// le.log("el area del cuadrado es " + areacuardado +"cm2")
console.groupEnd();

// codigo del triangulo
console.group("triangulo");

// const lado1triangulo = 6
// const lado2triangulo = 6
// const ladobasetriangulo = 4

// console.log("los lados del triangulo miden : "+ lado1triangulo + " cm, "+ lado2triangulo +" cm, "+ ladobasetriangulo + " cm" )
// const alturatriangulo = 5.5
// console.log("la altura del triangulo es: "+ alturatriangulo+"cm")

// const perimetrodeltriangulo = lado1triangulo + lado2triangulo +ladobasetriangulo
// console.log("el perimetro del trianguo es: "+ perimetrodeltriangulo +" cm")

// const areatriangulo = (ladobasetriangulo* alturatriangulo)/2
// console.log("el area del triangulo es: "+ areatriangulo +" cm2")

function perimetrotriangulo(lado1,lado2,base){
    return parseFloat(lado1) + parseFloat(lado2) + parseFloat(base)
}

function areatriangulo(base,altura){
    return (base * altura)/2
}


console.groupEnd();
// codigo del circulo

console.group("circulos")
// Radio
// const radioCirculo = 4
// console.log("El radio del circulo es: "+ radioCirculo)
// diametro
// const diametroCirculo = radioCirculo * 2
// console.log("El diametro del circulo es: "+ diametroCirculo)
function diametroCirculo(radio){
    return radio * 2
}
// pi
const PI = Math.PI
// console.log("El PI del circulo es: "+ PI)
// circunferencia
// const perimetroCirculo = diametroCirculo * PI
// console.log("El PERIMETRO del circulo es: "+ perimetroCirculo)
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

// Area del circulo
// const areaCirculo = (radioCirculo ** 2)*PI
// console.log("El area del circulo es: "+ areaCirculo)

function areaCirculo(radio){
return (radio * radio) * PI
}
console.groupEnd()

// issosceles

function isoscelesaltura(l1, l2 ,lb){
    
    if(l1 == l2 && l1 != lb && l2 != lb && lb < 2*l1 && lb > 0){
        const ladocuadrado = l1 * l1
        const  basecuadrado = lb * lb
        const altura = Math.sqrt(ladocuadrado - (basecuadrado/4))
        return  "La altura del triangulo es: " +  altura
    }else{
        
        return "los lados no corresponden a un triangulo isosceles"
        
    }
    

}


// aqui interactuamos con html
// cuadrado
function calculaperimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    alert(perimetrocuadrado(value))
}
function calcularareaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    alert(areacuadrado(value))
}
// triangulo
function calculaperimetroTriangulo(){
    const inputlado1 = document.getElementById("lado1").value
    const inputlado2 = document.getElementById("lado2").value
    const inputbase = document.getElementById("ladobase").value
    
    alert(perimetrotriangulo(inputlado1,inputlado2,inputbase))
}
function calcularareaTriangulo(){
    const inputbase = document.getElementById("ladobase").value
    const inputaltura = document.getElementById("altura").value
    alert(areatriangulo(inputbase,inputaltura))
}
// circulo
function calculaperimetroCirculo(){
    const inputradio = document.getElementById("Inputradio").value
    alert(perimetroCirculo(inputradio))
}
function calcularareaCirculo(){
    const inputradio = document.getElementById("Inputradio").value
    alert(areaCirculo(inputradio))
}

// isosceles altura

function caclularalturaisosceles(){

    const inputlado1isosceles = document.getElementById("lado1isosceles").value
    const inputlado2isosceles = document.getElementById("lado2isosceles").value
    const inputladobaseisosceles = document.getElementById("ladobaseisosceles").value
    alert(isoscelesaltura(inputlado1isosceles,inputlado2isosceles,inputladobaseisosceles))
}