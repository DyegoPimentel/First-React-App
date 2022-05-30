/* This project is an exemple of my learning process in ReactJS
 * Developed by Dyego Pimentel (github.com/dyegopimentel) 
 */

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
// Layouts
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  
  return (
    <Router>

      <Navbar/>

      <div className="container h-screen">
        <Routes>

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/contact" element={<Contact/>} />


        </Routes>
      </div>
      
      <Footer/>
    </Router>

  );
}

export default App;
