import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TableList from './TableList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <TableList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
