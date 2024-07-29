import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Game from './components/Game/Game';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/Game" element={<GamePage />} />
      </Routes>
     
    </BrowserRouter>
  );
};

const MainPage = () => {
  return (
    <div className="container">
      <Hero />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
};

const GamePage = () => {
  return (
    <div className="container">
      <Game />
    </div>
  );
};

export default App;