import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftSideBar from './components/LeftSideBar'
import TopSideBar from './components/TopSideBar'
import FaceComponent from './components/FaceComponent'
import HappyLevelComponent from './components/HappyLevelComponent'

function App() {
  const zalupa = 'fit';
  return (
    <>
    <LeftSideBar/>
    <TopSideBar/>
    <FaceComponent imageIndex={zalupa}/>
    <HappyLevelComponent StringIndex={zalupa}/>
    </>
  )
}

export default App
