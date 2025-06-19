import { useState } from 'react'
import './App.css'
import Planos from './Components/planos.jsx'
import Header from './Components/header.jsx'
import Button from './Components/button.jsx'
import Menu from './Components/navbar.jsx'



function App() {
 

  return (
    <>
    <Header/>
    <Menu/>
    <Planos/>
    <Button/>
    </>
  )
}

export default App
