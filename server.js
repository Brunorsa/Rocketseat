const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();


//Iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true }), { useNewUrlParser: true };
requireDir('./src/models/');

/* mongoose.connect(mongoConnectionString, { useNewUrlParser: true }, { useUnifiedTopology: true }); */
/* mongoose.connect(process.env.test_db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }); */


//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
