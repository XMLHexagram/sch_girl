import { ipcRenderer } from 'electron'

export function changeHeight() {
  ipcRenderer.send('change-sub-height', 1221)
}
