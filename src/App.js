import React from 'react';
import Booking from './Pages/Booking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './containers/Header/Navbar';
import Home from './Home';
import Footer from './containers/Footer/Footer';
import Projects from './Pages/Projects';
function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/booking" element={<Booking />} /> 
        <Route path="/projects" element={<Projects />} /> 
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  );
}
export default App;
