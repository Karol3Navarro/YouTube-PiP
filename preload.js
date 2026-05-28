const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendControl: (action) => ipcRenderer.send('window-control', action)
});