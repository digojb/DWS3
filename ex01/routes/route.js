const express = require('express');
const router = express.Router();
const { hefSoma, hefSubtracao, hefMultiplicacao, hefDivisao } = require('../controller/calculadora');


router.post('/calculadora', (req, res) => {
    const { num1, num2, operacao } = req.body;

    switch (operacao) {
        case '+':
            hefSoma(num1, num2, req, res);
            break;
        case '-':
            hefSubtracao(num1, num2, req, res);
            break;
        case '*':
            hefMultiplicacao(num1, num2, req, res);
            break;
        case '/':
            hefDivisao(num1, num2, req, res);
            break;
        default:
            res.status(400).json({ status: 'erro', mensagem: 'Operação inválida' });
    }
});

module.exports = router;



