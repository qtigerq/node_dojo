const saque = (valorSaque) => {
    let notas = []; // 100, 50, 20, 10
    while (valorSaque > 0){
        if (valorSaque >= 100){
            notas.push(100);
            valorSaque -= 100;    
        } else if (valorSaque >= 50){
            notas.push(50);
            valorSaque -= 50; 
        } else if (valorSaque >= 20){
            notas.push(20);
            valorSaque -= 20;          
        } else if (valorSaque >= 10){
            notas.push(10);
            valorSaque -= 10; 
        }
    }
    return notas;
}

export {saque}
