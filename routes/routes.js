const { Router } = require('express');
const router = Router();

router.get('/api', (req, res) => {

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

module.exports = {
    router,
}
