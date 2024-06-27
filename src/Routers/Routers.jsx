import React from 'react'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

import {Routes , Route } from 'react-router-dom'

const Routers = () => {
  return <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
}

export default Routers;
