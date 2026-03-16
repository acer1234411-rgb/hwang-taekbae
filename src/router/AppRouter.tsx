import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import MainPage from '../pages/MainPage';
import Sub1Details from '../pages/Sub1Details';
import Sub2Services from '../pages/Sub2Services';
import Sub3About from '../pages/Sub3About';
import Sub4Contact from '../pages/Sub4Contact';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details" element={<Sub1Details />} />
          <Route path="/services" element={<Sub2Services />} />
          <Route path="/about" element={<Sub3About />} />
          <Route path="/contact" element={<Sub4Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
