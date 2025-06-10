import { useState } from 'react'
import './App.css'
import Planos from './Components/planos.jsx'
import Header from './Components/header.jsx'
import Button from './Components/button.jsx'



function App() {
 

  return (
    <>
    <Header/>
    <h1 className='title'>Escolha seu plano</h1>
    <Planos/>
    <Button/>
    </>
  )
}

export default App
