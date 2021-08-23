// const lista1 = [
//     2,
//     4,
//     6,
//     3,
//     4,
//     5,
//     5,
//     5,
//     7,
//     8,
//     4,
//     5,
// ];

function modacalcular(lista1){
    const listaCount = {}

    lista1.map(
        function (elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1

            }else{
                listaCount[elemento] = 1
            }
        }
    )

    const lista1Array = Object.entries(listaCount).sort(
        function (elementoA , elementoB){
            return elementoA[1] - elementoB[1]

        }

    )

    const modaarray  = lista1Array[lista1Array.length - 1]
    return moda = parseInt(modaarray[0])

}

