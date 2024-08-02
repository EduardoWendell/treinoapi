import express from "express"

const servidor = express()

servidor.get('/calculadora/somar/n1/n2' , (req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let soma = n1 + n2;

    resp.send({
        soma:soma
    });
})

servidor.get('/calculadora/subtrair/n1/n2' , (req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let subtrair = n1 - n2;

    resp.send({
        subtrair:subtrair
    });
})


servidor.get('/calculadora/multiplicar/n1/n2' , (req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let multiplicar = n1 * n2;

    resp.send({
        multiplicar:multiplicar
    });
})


servidor.get('/calculadora/dividir/n1/n2' , (req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let dividir = n1 / n2;

    resp.send({
        dividir:dividir
    });
})






servidor.listen(5050, () => console.log('API subiu na porta 5050!'));
