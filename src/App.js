import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Tools
import Navbar from './tools/navbar'

// Pages
import Home from './pages/home'

// Styles
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
