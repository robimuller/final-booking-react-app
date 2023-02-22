import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import BookingPage from './BookingPage';
import Footer from './Footer';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function AppRoutes() {
  return (
    <Router history={history}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRoutes;
