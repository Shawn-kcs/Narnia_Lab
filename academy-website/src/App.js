import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import About from './components/About';
import CampList from './components/CampList';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedCamp, setSelectedCamp] = useState(null);
  const applicationFormRef = useRef(null);

  const handleCampSelect = (camp) => {
    setSelectedCamp(camp);
    setTimeout(() => {
      applicationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />
        <About />
        <CampList onCampSelect={handleCampSelect} />
        <ApplicationForm selectedCamp={selectedCamp} ref={applicationFormRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
