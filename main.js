const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: true,
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false,
      webviewTag: true
    }
  });


  win.webContents.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
  );

  win.loadFile('index.html');
  win.webContents.on('enter-html-full-screen', (event) => {
  event.preventDefault();

  // Mantener fullscreen SOLO dentro de la ventana Electron
  win.setFullScreen(false);
});

win.webContents.on('leave-html-full-screen', (event) => {
  event.preventDefault();

  win.setFullScreen(false);
});
}

ipcMain.on('window-control', (event, action) => {
  if (action === 'minimize') win.minimize();

  if (action === 'close') win.close();
});

app.whenReady().then(createWindow);