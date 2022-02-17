const { Router } = require('express');
const router = Router();

router.get('/api', (req, res) => {

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


module.exports = {
    router,
}
