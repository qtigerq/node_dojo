const valorPorExtensoUnidade = (valor, posicao) => {
    let e = "";
    if (valor[posicao-1] != null) { e = ' e '; }

    if ((valor[posicao] != 0) && (valor[posicao-1] != 1)){
        valor = valor[posicao];
    }

    switch (valor){
        default: return "";
        case "0": return ("zero");
        case "1": return (e + "um");
        case "2": return (e + "dois");
        case "3": return (e + "três");
        case "4": return (e + "quatro");
        case "5": return (e + "cinco");
        case "6": return (e + "seis");
        case "7": return (e + "sete");
        case "8": return (e + "oito");
        case "9": return (e + "nove");
    } 
}

const valorPorExtensoDezena = (valor, posicao) => {
    let e = "";
    if (valor[posicao-1] != null) { e = ' e '; }

    if (valor[posicao] != 0){
        if ((valor[posicao + 1] == 0) || (valor[posicao] == 1)){
            valor = (valor[posicao] + valor[posicao + 1]);
        } else {
            valor = (valor[posicao] + '0');
        }
    }

    switch (valor){
        default: return "";
        case "10": return (e + "dez");
        case "11": return (e + "onze");
        case "12": return (e + "doze");
        case "13": return (e + "treze");
        case "14": return (e + "quatorze");
        case "15": return (e + "quinze");
        case "16": return (e + "dezesseis");
        case "17": return (e + "dezessete");
        case "18": return (e + "dezoito");
        case "19": return (e + "dezenove");
        case "20": return (e + "vinte");
        case "30": return (e + "trinta");
        case "40": return (e + "quarenta");
        case "50": return (e + "cinquenta");
        case "60": return (e + "sessenta");
        case "70": return (e + "setenta");
        case "80": return (e + "oitenta");
        case "90": return (e + "noventa");
    }
}

const valorPorExtensoCentena = (valor, posicao) => {
    let espaco = "";
    if (valor[posicao-1] != null) {
        espaco = ' ';
        if ((valor[posicao+1] == 0) && (valor[posicao+2] == 0)) {
            espaco = ' e ';
        }
    }

    if ((valor[posicao] == 1) && (valor[posicao+1] == 0) && (valor[posicao+2] == 0)){         
        valor = '100';
    } else {
        valor = valor[posicao];
    }

    switch (valor){
        default: '';
        case "100": return (espaco + "cem");
        case "0": return ("");
        case "1": return (espaco + "cento");
        case "2": return (espaco + "duzentos");
        case "3": return (espaco + "trezentos");
        case "4": return (espaco + "quatrocentos");
        case "5": return (espaco + "quinhentos");
        case "6": return (espaco + "seiscentos");
        case "7": return (espaco + "setecentos");
        case "8": return (espaco + "oitocentos");
        case "9": return (espaco + "novecentos");
    }
}

const valorPorExtenso = (valor) => {

    var resultado = '';

    resultado = valorPorExtensoUnidade(valor, valor.length-1) + resultado;
    if (valor.length>1) { resultado = valorPorExtensoDezena(valor, valor.length-2) + resultado;}
    if (valor.length>2) { resultado = valorPorExtensoCentena(valor, valor.length-3) + resultado;}
    if (valor.length>3) {
        let mil = '';
        if ((valor[valor.length-4] != 0) || (valor[valor.length-5] != 0) || (valor[valor.length-6] != 0)){
            mil = ' mil';
        }
        resultado = valorPorExtensoUnidade(valor, valor.length-4) + mil + resultado;
    }
    if (valor.length>4) { resultado = valorPorExtensoDezena(valor, valor.length-5) + resultado;}
    if (valor.length>5) { resultado = valorPorExtensoCentena(valor, valor.length-6) + resultado;}
    if (valor.length>6) {
        let milhao = '';
        if ((valor[valor.length-7] != 0) || (valor[valor.length-8] != 0) || (valor[valor.length-9] != 0)){
            if ((valor[valor.length-7]) == 1) { milhao = ' milhão'; } else { milhao = ' milhões';}
        }
        resultado = valorPorExtensoUnidade(valor, valor.length-7) + milhao + resultado;
    }
    if (valor.length>7) { resultado = valorPorExtensoDezena(valor, valor.length-8) + resultado;}
    if (valor.length>8) { resultado = valorPorExtensoCentena(valor, valor.length-9) + resultado;}
    if (valor.length>9) {
        let bilhao = '';
        if ((valor[valor.length-10]) == 1) { bilhao = ' bilhão'; } else { bilhao = ' bilhões';}
        resultado = valorPorExtensoUnidade(valor, valor.length-10) + bilhao + resultado;
    }
    if (valor.length>10) { resultado = valorPorExtensoDezena(valor, valor.length-11) + resultado;}
    if (valor.length>11) { resultado = valorPorExtensoCentena(valor, valor.length-12) + resultado;}

    return resultado;

}

export {valorPorExtensoUnidade,
        valorPorExtensoDezena,
        valorPorExtensoCentena,
        valorPorExtenso }