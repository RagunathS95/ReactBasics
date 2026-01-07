import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props_Parent from './Props_Parent.jsx';
import {Route, Routes} from 'react-router-dom';
import Head from './Head.jsx';

function App() {
  
  return (
    <>
    <Head />
      
        <Routes>
          <Route path="/Prop-Parent" element={<Props_Parent />} />
        </Routes>
      
    </>
  )
}

export default App
