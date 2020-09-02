import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles'
// const { ipcRenderer } = window.require('electron')
import { changeHeight } from '../ipcRender/sender'

export default function GroupOrientation() {
  return (
    <div className={'flex w-full flex-row h-full flex-wrap'}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
        className={'justify-start w-full'}
      >
        <Button>Add</Button>
        <Button>Organize</Button>
        <Button onClick={changeHeight}>Fine</Button>
      </ButtonGroup>

      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
        className={'justify-end w-full'}
      >
        <Button>Setting</Button>
        <Button>about</Button>
        <Button>donate</Button>
      </ButtonGroup>
    </div>
  )
}
