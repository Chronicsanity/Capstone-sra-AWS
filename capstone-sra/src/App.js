import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Sign_up';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Caller from './pages/Caller';
import SraRoot from './pages/Sra_root';

  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Sign_up' element={<Signup />} />
        <Route exact path='/Admin' element={<Admin />} />
        <Route exact path='/Caller' element={<Caller />} />
        <Route exact path='/Sra_root' element={<SraRoot />} />
       
    </Routes>
    </Router>
);
}
  
export default App;