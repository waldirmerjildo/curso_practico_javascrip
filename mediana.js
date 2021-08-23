// var listanum = []
    // function comparar(a,b){
    //     return a - b
    // }

function calcularMedina(listauniversal){

    listanum = listauniversal.sort((a,b) => {return a -b})

    const mitadLista1 = parseInt(listanum.length / 2)

    function calcularMediaAritmetica(lista){
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0 , elementoNew){
                return valorAcumulado + elementoNew;

            }
        );

        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

    function espar(numerito){
        if(numerito % 2 === 0){
            return true
        
        }else{
            return false
        }

    }

    let mediana
    if(espar(listanum.length)){
        let element1 = listanum[mitadLista1 - 1]
        let element2 = listanum[mitadLista1]
        const calcualrPormedio1y2 = calcularMediaAritmetica([
            element1,
            element2,
        ]);

        mediana = calcualrPormedio1y2

    } else {
            mediana = listanum[mitadLista1]
    }

    return mediana

}