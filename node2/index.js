const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('<h1>Node 2</h1>'))

app.listen(3000, () => console.log('Servidor Node 2 - Iniciado'))