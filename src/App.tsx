import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftSideBar from './components/LeftSideBar'
import TopSideBar from './components/TopSideBar'
import FaceComponent from './components/FaceComponent'
import HappyLevelComponent from './components/HappyLevelComponent'
import HappinessLevel from './components/HappienesLevelComponent'

function App() {
  const zalupa = 'fit';
  const array = [1,2,3,4]
  return (
    <>
    <LeftSideBar/>
    <TopSideBar/>
    <FaceComponent imageIndex={zalupa}/>
    <HappyLevelComponent StringIndex={zalupa}/>
    <HappinessLevel happinessLevel={5} args={array}/>
    </>
  )
}

export default App
