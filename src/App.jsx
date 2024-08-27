// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/common/navigation/Navigation';
import Footer from './components/common/footer/Footer';
import Home from './pages/Accueil';
import './styles/App.css';
import ScrollToTopButton from './components/return/ReturnButton';
import Abonnement from './pages/Abonnement';
import Apropos from './pages/Apropos';
import Loading from './components/loadingpage/Loading';
import Term from './pages/Term';
import Policy from './pages/Policy';





const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);


  

  if (loading) {
    return <Loading/> ;
  }

  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/Abonnement" element={<Abonnement />} />
        <Route path="/Term-et-conditions" element={<Term />} />
        <Route path="/politique-et-confidentialite" element={<Policy />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
    </>
  );
};

export default App;
