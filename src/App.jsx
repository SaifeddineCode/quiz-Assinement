import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Waitlist from './components/Waitlist'

function App() {

  return (
    <main className='flex gap-5 p-5'>
      <SideBar />
      <Waitlist />
    </main>
  )
}

export default App
