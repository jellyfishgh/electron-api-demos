const ipc = require('electron').ipcMain;

ipc.on('asynchronous-message', (event) => {
    event.sender.send('asynchronous-reply', 'pong');
});
