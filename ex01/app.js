const express = require('express');
const app = express();
const port = 40000;
const routes = require('./routes/route');

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
