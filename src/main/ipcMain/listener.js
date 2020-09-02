import { ipcMain } from 'electron'

export function initIpcListeners () {
  ipcMain.on('create-sub-win', () => {
    if (subWin === null) {
      createSubWin()
    }
  })

  ipcMain.on('change-sub-height', (event, arg) => {
    // console.log(arg)
    let subWinSize = subWin.getSize()
    subWin.setSize(subWinSize[0], arg)
    // console.log(subWin.getSize())
  })
}


