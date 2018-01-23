var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use('/javascript', express.static(__dirname + '/javascript'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const options = {
    providerOptions: {
        google: {
            key: 'GOOGLE_KEY',
            secret: 'GOOGLE_SECRET'
        }
    },
    server: {
        host: 'localhost:4200',
        protocol: 'http',
    },
    filePath: '/path/to/folder/'
}
app.use(uppy.app(options))