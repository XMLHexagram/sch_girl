import React from 'react'
import SimpleAccordion from '../components/list'
import GroupOrientation from '../components/button'
import { getWinSize } from '../ipcRender/sender'
import { Counter } from '../store/test_redux'

function App() {
	return (
		<div className="w-full" style={{ height: getListHeight() }}>
			<Counter></Counter>
			<div className="w-full h-full grid grid-cols-5 overflow-hidden">
				<div className="col-span-1 overflow-auto">
					<GroupOrientation />
				</div>
				<div className="col-span-4 overflow-auto">
					<SimpleAccordion />
				</div>
			</div>
		</div>
	)
}

let extensionWin = false

function getListHeight() {
	let size = getWinSize()
	console.log(
		size + '1111111111111111111111111111111111111111111111111111111111'
	)
	let width = size[0]
	let height = size[1]
	if (extensionWin == false) {
		return height
	} else if (extensionWin == true) {
		return height * 0.6
	}
}

export default App
