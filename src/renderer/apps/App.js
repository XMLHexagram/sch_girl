import React from 'react'
import SimpleAccordion from '../components/list'
import GroupOrientation from '../components/button'

function App() {
  return (
    <div className="w-screen h-screen grid grid-cols-5 overflow-hidden">
      <div className="col-span-1">
        <GroupOrientation/>
      </div>
      <div className="col-span-4 overflow-auto">
        <SimpleAccordion />
      </div>
    </div>
  )
}

export default App
