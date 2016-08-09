const {
    app,
    dialog,
    globalShortcut
} = require('electron');

app.on('ready', function() {
    globalShortcut.register('CommandOrControl+Alt+K', function() {
        dialog.showMessageBox({
            type: 'info',
            message: 'Success!',
            detail: 'You pressed the registered global shortcut keybinding.',
            buttons: ['OK']
        });
    });
});

app.on('will-quit', function() {
    globalShortcut.unregisterAll();
});
