
const connect_socket = (io) =>  {
    io.on('connection', (socket) => {
        console.log();

        socket.on('join', (data) => {
            console.log(data);
            //emit that you have joined
            //on login/logout with token;
            socket.emit('message', {status: "success", data: "successfully joined"});
        });

        socket.on('deleteItem', (data) => {
            //delete Item
            //delete from temp database
            socket.emit('message', {status: "success", data: "deleted item"});
        });

        socket.on('bill', (data) => {
            //add to data base
            socket.emit('message', {status: "success", data: "data saved"});
        });

        // update for later versions // save data 
        // socket.on('signout', (data) => {
        //     //delete instance
        //     //save temporariy
        //     socket.emit('message', {status: "success", data: ""});
        // });
    })

}

module.exports = { connect_socket }