import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import MemoryGame from '../pages/MemoryGame'
import Settings from '../pages/Settings'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='*' element={<Home/>}/>
      <Route path='memory-game' element={<MemoryGame/>}/>
      <Route path='settings' element={<Settings/>}/>
    </Routes>
  )
}

export default AllRoutes