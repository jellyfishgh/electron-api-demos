const fs = require('fs');
const os = require('os');
const path = require('path');
const {
    BrowserWindow,
    ipcMain,
    shell
} = require('electron');

ipcMain.on('print-to-pdf', function(event) {
    const pdfPath = path.join(os.tmpdir(), 'print.pdf');
    const win = BrowserWindow.fromWebContents(event.sender);
    // Use default printing options
    win.webContents.printToPDF({}, function(error, data) {
        if (error) throw error;
        fs.writeFile(pdfPath, data, function(error) {
            if (error) {
                throw error;
            }
            shell.openExternal('file://' + pdfPath);
            event.sender.send('wrote-pdf', pdfPath);
        });
    });
});
