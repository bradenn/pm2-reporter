let express = require('express');
let index = express();

index.use(express.json());
index.use(express.urlencoded({extended: false}));
let apiRoute = require('./routes');

index.use('/', apiRoute);


let port = 5001;
if (process.env.PORT) port = process.env.PORT;
index.listen(port, function () {
    console.log(`pm2-reporter started; listing on port ${port}`);
    console.log(`Copyright © ${new Date().getFullYear()} BN Media`);
});

module.exports = index;
