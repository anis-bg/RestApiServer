var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
const mongoose = require ('mongoose'); // i m using mongoose to connect with mongoDB
require ('dotenv/config');
const bodyparser = require ('body-parser');
const cors = require ('cors');

app.use(cors());
app.use (bodyparser.json());

// -------------------------SETTING ROUTES --------------------------------------
const babysitterRoute= require ('./Routes/babysitter');
app.use('/babysitter',babysitterRoute);

const messageRoute= require ('./Routes/message');
app.use('/message',messageRoute);

const parentRoute= require ('./Routes/parent');
app.use('/parent',parentRoute);
// ----------------------------------------------------------------------------

app.listen(port);
console.log('RESTful API server started on: ' + port);


//CONNECT TO DB
mongoose.connect(process.env.linkBD,
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    }
);
