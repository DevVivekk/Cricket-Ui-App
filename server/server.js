const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routers/routes');
const connect = require('./db/connection');
const http = require('http');
const app = express();
const server = http.createServer(app);
app.use(express.json({limit:'5mb'}));
app.use(cors());
app.use(cookieParser());
app.use('/api',router);
require('./socket/socket')(server);
server.listen(process.env.PORT,async()=>{
    console.log(`Runinng.. ${process.env.PORT}`)
    await connect();
})