const ipc = require('electron').ipcMain;

ipc.on('synchronous-message', (event) => {
    event.returnValue = 'pong';
});
