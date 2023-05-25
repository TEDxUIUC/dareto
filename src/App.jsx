import React from 'react'
import './index.css'
import Ztext from 'react-ztext'
import mountainWhite from './assets/TEDxUIUC_Mountain_White.png'
import GalleryWall from './components/GalleryWall'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import AppRouter from './components/AppRouter'
import Nav from './components/Nav'
import About from './pages/About'
import Speakers from './pages/Speakers'


function App() {
  return(

<BrowserRouter>
    <Nav />
    
    <AppRouter />
    </BrowserRouter>

  )
}

export default App
