let express = require('express');
let index = express();

index.use(express.json());
index.use(express.urlencoded({ extended: false }));
let apiRoute = require('./routes');

index.use('/', apiRoute);

index.listen(5001, function () {
    console.log('Express server started. Listing on port 5001.');
});

module.exports = index;
