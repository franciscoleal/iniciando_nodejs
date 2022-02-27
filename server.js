// criar um servidor e ver como ele se comporta
const http = require("http")

// Ao criar um servidor em node js
// Sempre faremos uma requisicao = req 
// E aguardamos uma resposta = res
const server = http.createServer((req, res) => {
    // tipo de retorno, status da minha requisicao
    // content-type e o tipo de retorno que eu quero
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.url === "/produto") {
        res.end(JSON.stringify({
            message: "Rota de produto",
        }));
    }

    if (req.url === "/usuario") {
        res.end(JSON.stringify({
            message: "Rota de usuario",
        }));
    }

    res.end(JSON.stringify({
        message: "Qualquer rota",
    }));
}).listen(4001, () => console.log("Servidor esta rodando na porta 4001"));