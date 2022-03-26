import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './Header'
import TenderCards from './tinderCards'
import SwipeButtons from './SwipeButtons'

function App() {
  return (
      <div className="app">
        <Header/>
        <TenderCards/>
        <SwipeButtons/>
      </div>
  )
}

export default App
