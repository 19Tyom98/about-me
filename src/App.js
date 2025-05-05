import './App.css';
// import './About.css'
import Header from './components/Header';
import Home from './components/Home';
import { Context } from './components/Context';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const value = {}
  return (
    <Context.Provider value={value}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Footer /> */}
        </div>
    </Context.Provider>
  );
}

export default App:
