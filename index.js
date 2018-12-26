const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('./config/db');
var socket = require('socket.io');
const port1 = process.env.PORT || 3001;
const port2 = process.env.PORT || 8080;

const { routes } = require('./config/routes')


app.use(express.json());
app.use(cors());

app.use('/', routes);


server = app.listen(port2, function(){
    console.log('server is running on port 8080')
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});

// ... other imports 
const path = require("path")

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port1, () => {
    console.log('listening on port', port1);
});


