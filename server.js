function soma(valor1, valor2) {
    return Number(valor1) + Number(valor2)
}

function multiplicacao(valor1, valor2) {
    return valor1 * valor2
}

function subtracao(valor1, valor2) {
    return Number(valor1) - Number(valor2)
}

function divisao(valor1, valor2) {
    return valor1 / valor2
}

const http = require('http')
const url = require('url')

const PORT = 8000

const servidor = http.createServer((req, res) => {
    const urlTransformada = url.parse(req.url, true)
    const { pathname, query } = urlTransformada
    console.log(pathname);
    console.log(query);


    //metodo map
    
    let operacoes = [
        { operacao: 'soma', conta: soma(query.a, query.b) },
        { operacao: 'multiplicacao', conta: multiplicacao(query.a, query.b) },
        { operacao: 'divisao', conta: divisao(query.a, query.b) },
        { operacao: 'subtracao', conta: subtracao(query.a, query.b) },
    ]

    let notFound

    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>Bem vindos a calculadora</h1>')
    } else {
        notFound = true
        operacoes.map((item) => {
            if (pathname === `/${item.operacao}`) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                let valor = item.conta
                res.end(`<h1>${item.operacao} é ${valor}</h1>`)
                notFound = false
            }
        })
        if (notFound == true) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end('<h1>Pagina nao encontrada</h1>')
        }
    }

    //metodo switch

    // switch (true) {
    //     case pathname === '/':
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end('<h1>Bem vindos a calculadora</h1>')
    //         break
    //     case pathname === '/soma':
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         var valor = soma(query.a, query.b)
    //         res.end(`<h1>soma é ${valor}</h1>`)
    //         break
    //     case pathname === '/multiplicacao':
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         var valor = multiplicacao(query.a, query.b)
    //         res.end(`<h1>multiplicacao é ${valor}</h1>`)
    //         break
    //     case pathname === '/divisao':
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         var valor = divisao(query.a, query.b)
    //         res.end(`<h1>divisao é ${valor}</h1>`)
    //         break
    //     case pathname === '/subtracao':
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         var valor = subtracao(query.a, query.b)
    //         res.end(`<h1>subtracao é ${valor}</h1>`)
    //         break
    //     default:
    //         res.writeHead(404, { 'Content-Type': 'text/html' })
    //         res.end('<h1>Pagina nao encontrada</h1>')
    // }

    //metodo if

    // if (pathname === '/') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' })
    //     res.end('<h1>Bem vindos a calculadora</h1>')
    // } else if (pathname === '/soma') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' })
    //     let valor = soma(query.a, query.b)
    //     res.end(`<h1>soma é ${valor}</h1>`)
    // } else if (pathname === '/multiplicacao') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' })
    //     let valor = multiplicacao(query.a, query.b)
    //     res.end(`<h1>multiplicacao é ${valor}</h1>`)
    // } else if (pathname === '/subtracao') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' })
    //     let valor = subtracao(query.a, query.b)
    //     res.end(`<h1>subtracao é ${valor}</h1>`)
    // } else if (pathname === '/divisao') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' })
    //     let valor = divisao(query.a, query.b)
    //     res.end(`<h1>divisao é ${valor}</h1>`)
    // } else {
    //     res.writeHead(404, { 'Content-Type': 'text/html' })
    //     res.end('<h1>Pagina nao encontrada</h1>')
    // }
})

servidor.listen(PORT, () => {
    console.log('o seu servidor esta pronto')
})