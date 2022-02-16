const express = require('express');
const { router } = require('../routes/routes');


class Server {

    constructor() {
        this.port = 3000;
        this.app = express();
        this.routes();
    }

    routes() {
        this.app.use('', router)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`)
        } );
    }

}

module.exports = Server;
