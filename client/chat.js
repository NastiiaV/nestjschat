let socket = io('http://localhost:3000');
//let socket = null;
const messages = document.getElementById('messages');
const inpmessage = document.getElementById('inputmsg');

const receiveMessage = (nmessage) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(nmessage));
    return li;
    //return some;
}

socket.on('msgToClient', (message) => {
    //message ="newsdkjsd"
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(message));
    //return li;
    messages.appendChild(li);
    //handleMessage(message);
   })


// const handleMessage = (message) => {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode("hhhh"));
//     //return li;
//     messages.appendChild(li);
//     //console.log("handleMessage");
// }

const sendMessage =  () => {
    socket.emit('msgToServer', { data: inpmessage.value })
}

