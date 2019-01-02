import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Contacts from './components/Contacts'

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Header />
        <Contacts />
      </div>
    )
  }
}

export default App
