import './App.css'
import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Container from './components/Container'
import FormEncuesta from './components/FormEncuesta'
import EditEncuesta from './components/EditEncuesta'

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Container />} exact />
        <Route path="/formEncuesta" element={<FormEncuesta />} />
        <Route path="/editEncuesta/:id" element={<EditEncuesta />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
