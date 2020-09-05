import { ipcMain, BrowserWindow } from 'electron'

export function initIpcListeners() {
  ipcMain.on('create-sub-win', () => {
    if (subWin === null) {
      createSubWin()
    }
  })

  ipcMain.on('change-sub-height', (event, arg) => {
    // console.log(arg)
    let window = BrowserWindow.getAllWindows()[0]
    let subWinSize = window.getContentSize()
    window.setSize(Math.floor(subWinSize[0]), arg)
    console.log(subWinSize)
    // console.log(subWin.getSize())
  })

  ipcMain.on('get-window-size', (event, arg) => {
    let window = BrowserWindow.getAllWindows()[0]
    let WinSize = window.getContentSize()
    event.returnValue = WinSize
  })
}
