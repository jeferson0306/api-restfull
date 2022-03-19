const express = require('express');
const app = express()
const data = require("./data.json");

app.use(express.json());
app.get("/clientes", function (request, response) {
    response.json(data);
});

app.get("/clientes/:id", function (request, response) {
    const { id } = request.params
    const cliente = data.find(cli => cli.id = id);

    if (!cliente) return res.status(204).json();

    response.json(cliente);
});

app.post("/clientes", function (request, response) {
    const { name, email } = request.body;

    response.json({ name, email })
});

app.put("/clientes/:id", function (request, response) {
    const { id } = request.params
    const cliente = data.find(cli => cli.id = id);

    if (!cliente) return res.status(204).json();

    const { name, email } = request.body;
    cliente.name = name;
    cliente.email = email;

    response.json(cliente);
});

app.delete("/clientes/:id", function (request, response) {
    const { id } = request.params
    const clienteFiltered = data.filter(cliente => cliente.id != id);

    response.json(clienteFiltered);

});

app.listen(3000, function () {
    console.log("Server is running");
});

// app.get("/clientes/:id", function (request, response) {});
// app.post("/clientes", function (request, response) {});
// app.put("/clientes/:id", function (request, response) {});
// app.delete("/clientes/:id", function (request, response) {});
