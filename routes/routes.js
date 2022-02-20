const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        name: 'Análisis y Diseño 1',
        website: 'Práctica 1 - Grupo 3'
    })
})

router.get('/palindromo/:palabra',(req,res)=>{
    var palabra = req.params.palabra
    var pal = ""


    for(var i = palabra.length-1; i >= 0; i--){
        pal = pal + palabra[i]
    }


    if(palabra == pal){
        res.json({
            palindromo: true
        })
    }else{
        res.json({
            palindromo: false
        })
    }

})
router.get('/primo/:NUMERO', (req, res) => {
    var numero =req.params.NUMERO;
    if(numero == 2 || numero==3) {
        res.send(numero + ' es un número primo');
        return;
    }
    if(numero <= 1 || numero % 2 == 0 || numero %3 == 0){
        res.send(numero + ' no es un número primo');
        return;
    }
    for(var i = 5 ; i * i <= numero; i+=6){
        if(numero % i ==0 || numero % (i+2)==0){
            res.send(numero + ' no es un número primo');
            return;
        }
    }
    res.send(numero + ' es un número primo');
    return;
})
// Fibonacci
router.get('/fibo/:numero', (req = Request, res) => {

    const { numero } = req.params

    const nfibo = fib(numero);
    return res.json({
        fibonacci: nfibo
    })
})

function fib(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}


// raiz cubica
router.get('/raiz/:numero', (req = Request, res) => {

    const { numero } = req.params;

    const cubica = Math.pow(numero, 1 / 3);

    return res.json({
        raiz_cubica: cubica
    })

})


router.get('/potencia/:numero', (req = Request, res) => {

    const { numero } = req.params;

    const cubo = Math.pow(numero, 3);

    return res.json({
        potencia_cubo: cubo
    })

})

module.exports = {
    router,
}
