let totalDeDias = parseInt(29);

let qtdAnos, qtdMeses;

function maisQueAno(dias){
    if(dias >= 365){
        return dias / 365

    }
    else {return 0}
}

function maisQueMes(dias){
    if(dias >= 30 && dias < 365){
        return dias / 30
    }
    else {return 0}
}

qtdAnos = parseInt(maisQueAno(totalDeDias));
totalDeDias= totalDeDias % 365;


qtdMeses= parseInt(maisQueMes(totalDeDias));
totalDeDias= totalDeDias % 30;

let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
totalDeDias + " dia(s)");

console.log(resultado);

// 1 mes = 30 dias
// 1 ano = 365 dias
// receberá em dias, e converterá para anos, meses e dias passado