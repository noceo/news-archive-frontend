import React from 'react'
import logo from './logo.svg'
import { Explorer } from './components/modules/explorer/Explorer'
import './App.scss'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <Explorer />
      </header>
    </div>
  )
}

export default App
