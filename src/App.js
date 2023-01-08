import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Find from './pages/find';
import Report from './pages/report';
function App() {
  return (
    
    <Router>
    <Navbar />
    <body className ="bg-mainImage bg-no-repeat bg-cover bg-center bg-fixed min-h-screen ">
    <Routes>
    
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/find' element={<Find/>} />
        <Route path='/report' element={<Report/>} />
  
    </Routes>
    </body>
    </Router>

  );
}

export default App;
