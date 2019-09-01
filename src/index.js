const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const path = require('path');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('',
{useNewUrlParser:true,}
)

app.use((req,res, next) => {
    req.io = io;
    next();
});

mongoose.connect('Sua string de conn',{useNewUrlParser:true,})


app.use(cors());   
app.use('/files', express.static(path.resolve(__dirname,'..','uploads','resized')));
app.use(require('./routes'));


server.listen(3333);


