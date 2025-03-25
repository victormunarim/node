const express = require('express')
const app = express()

app.use(express.json())

const PORT = 8001

let usuarios = []

app.get('/', (req, res) => {
    res.send(`lista de usuarios atualizada: ${usuarios}`)
})

app.post('/usuario', (req, res) => {
    const { nome, email } = req.body
    usuarios.push({ nome: nome, email: email })
    res.send(`aqui nos vamos criar o usuario de: ${nome}`)
})

app.listen(PORT, () => {
    console.log('servidor inicializado')
})