const hefSoma = (num1, num2, res) => {
    const resultado = num1 + num2;
    res.json({ resultado });
};

const hefSubtracao = (num1, num2, res) => {
    const resultado = num1 - num2;
    res.json({ resultado });
};

const hefMultiplicacao = (num1, num2, res) => {
    const resultado = num1 * num2;
    res.json({ resultado });
};

const hefDivisao = (num1, num2, res) => {
    if (num2 === 0) {
        res.status(400).json({ status: 'erro', mensagem: 'Divisão por zero não é permitida.' });
        return;
    }
    const resultado = num1 / num2;
    res.json({ resultado });
};

const fCalculo = (req, res) => {
    const { num1, num2, operacao } = req.body;

    switch (operacao) {
        case '+':
            hefSoma(num1, num2, res);
            break;
        case '-':
            hefSubtracao(num1, num2, res);
            break;
        case '*':
            hefMultiplicacao(num1, num2, res);
            break;
        case '/':
            hefDivisao(num1, num2, res);
            break;
        default:
            res.status(400).json({ status: 'erro', mensagem: 'Operação inválida' });
    }
};

module.exports = {
    hefSoma,
    hefSubtracao,
    hefMultiplicacao,
    hefDivisao,
    fCalculo
};
