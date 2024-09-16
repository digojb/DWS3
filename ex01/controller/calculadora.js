const hefSoma = (num1, num2, req, res) => {
    const resultado = num1 + num2;
    res.json({ status: 'ok', resultado });
};

const hefSubtracao = (num1, num2, req, res) => {
    const resultado = num1 - num2;
    res.json({ status: 'ok', resultado });
};

const hefMultiplicacao = (num1, num2, req, res) => {
    const resultado = num1 * num2;
    res.json({ status: 'ok', resultado });
};

const hefDivisao = (num1, num2, req, res) => {
    if (num2 === 0) {
        res.status(400).json({ status: 'erro', mensagem: 'Divisão por zero não é permitida' });
        return;
    }
    const resultado = num1 / num2;
    res.json({ status: 'ok', resultado });
};

module.exports = {
    hefSoma,
    hefSubtracao,
    hefMultiplicacao,
    hefDivisao
};
