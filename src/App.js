import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';

function App() {
  return (
    <div className='App'>

        <Header />

        <main>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
                <Route path='/portfolio' element={<Portfolio/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/legalNotice' element={<LegalNotice/>}></Route>
            </Routes>
        </main>
    
    </div>
  );
}

export default App;
