import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/Contact-us';
import Detail from './pages/Detail';
import Casestudy from './pages/Casestudy';
import Service from './pages/Service';
import ScrollToTop from './components/scrolltotop';
import ServicesTab from './components/services-tab';
import ServiceDetails from './pages/ServiceDetails';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/our-work" element={<Detail />} />
            <Route path="/service" element={<Service />} />
            <Route path='/case-study' element={<Casestudy />} />
            <Route path="/services" element={<ServicesTab />} />
            <Route path="/service/:serviceId" element={<ServiceDetails />} />
          </Routes>
          <ScrollToTop />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
