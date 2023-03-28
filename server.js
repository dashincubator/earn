const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const config = {
    host: '0.0.0.0',
    port: process.env.PORT || 8080
};


app.use(express.static( path.join(__dirname, 'public') ));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


function load(path) {
    fs.readdirSync(path).forEach(function(file) {
        let filepath = path + '/' + file;

        fs.stat(filepath, function(err,stat) {
            if (stat.isDirectory()) {
                load(filepath);
            }
            else {
                require(filepath)(app);
            }
        });
    });
}

load(__dirname + '/routes');


app.listen(config.port, config.host);
