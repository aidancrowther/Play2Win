const {app, BrowserWindow, ipcMain} = require('electron');
const url = require('url');
const path = require('path');

let win;

//Create main display window
function createWindow(){

    let win = new BrowserWindow({width:1366, height:768});
    win.setAutoHideMenuBar(true);

	//Load main.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'Resources/HTML/index.html'), 
		protocol: 'file',
		slashes: true
	}));

	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
		app.quit();
    });

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin'){app.quit();}
});

app.on('activate', () => {
	if(win === null){ createWindow(); }
});