let express = require('express');
let index = express();

index.use(express.json());
index.use(express.urlencoded({extended: false}));
let apiRoute = require('./routes');

index.use('/', apiRoute);


index.listen(5001, function () {
    let port = 5001;
    if (process.env.PORT) port = process.env.PORT;
    console.log(`Express server started. Listing on port ${port}.`);
});

module.exports = index;
