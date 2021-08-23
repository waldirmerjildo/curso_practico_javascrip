// helpers
function esPar(numerito){
    numerito % 2 == 0
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0 , elementoNew){
            return valorAcumulado + elementoNew;

        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
// calcualdora mediana
function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length / 2)
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1]
        const personitaMitad2 = lista[mitad]
        const medianaSalario = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
        return medianaSalario
    }else {
        const personitaMitad = lista[mitad]
        return personitaMitad
    }
}

// calculo mediana general
const salariosCol = colombia.map(

    function(perosnita){
        return perosnita.salary
    }
)

const salariosColSorted = salariosCol.sort(
    function (salarioA, salarioB){
        return salarioA - salarioB

    }
)
const medianaGeneralCol = medianaSalariosCol(salariosColSorted)

// mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100
const spliceCount = salariosColSorted.length - spliceStart

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
)

const medianaTop10Col = medianaSalariosCol(salariosColTop10)

console.log(
    medianaGeneralCol,
    medianaTop10Col,

)