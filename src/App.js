import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TableList from './TableList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <TableList />
      <Footer />
    </div>
  );
}

export default App;
