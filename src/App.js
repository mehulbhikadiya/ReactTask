import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Login from './components/componet/Login';
import Register from './components/componet/Register';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='navbar' element={<Navbar />} />
        <Route path='/' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
