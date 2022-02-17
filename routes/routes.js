const { Router } = require('express');
const router = Router();

router.get('/api', (req, res) => {

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


module.exports = {
    router,
}
