import { ipcRenderer } from 'electron'

export function changeHeight() {
  ipcRenderer.send('change-sub-height', 1221)
}

export function getWinSize() {
  return ipcRenderer.sendSync('get-window-size')
}
