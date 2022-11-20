import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routesportfolio from './Routes';
import About from './components/About/About';
import Contact from './components/Contacts/Contacts';
import Homepage from './components/HomePage/Homepage';
// import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Routesportfolio />
   {/* <Navbar /> */}
   <Homepage />
    <About />
   <Portfolio />
   <Testimonial />
   <Contact />
  </React.StrictMode>
);