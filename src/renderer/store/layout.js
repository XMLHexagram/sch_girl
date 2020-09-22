import { configureStore, createSlice } from '@reduxjs/toolkit'
import { getWinSize } from '../ipcRender/sender'

export const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        mainWin: {
            height: 100,
            width: 100,
        }
    },
    reducers: {
        init: (state) => {
            console.log(getWinSize())
        }
    }
})

export default layoutSlice.reducer

export const { init } = layoutSlice.actions

const selectLayout = (state) => state.layout.value