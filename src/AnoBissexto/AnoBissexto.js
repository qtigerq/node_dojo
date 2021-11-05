const isBissexto = (ano) => {
    const isDivisivelPor4 = ano % 4 == 0;
    const notIsDivisilvePor100 = ano % 100 != 0;
    const isDivisivelPor400 = ano % 400 == 0;
    return (isDivisivelPor4 && notIsDivisilvePor100) || isDivisivelPor400;
}

const anoBissexto = (ano) => isBissexto(ano) ? 'bissexto' : 'não é bissexto';

/*const anoBissextoPaia = (ano) => {
    if (isBissexto(ano)) {
        return "bissexto";
    } else {
        return "não é bissexto";
    }
}*/

export {anoBissexto}