// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashbaord';
import Technologies from './pages/Technologies';
import Careers from './pages/Careers';
import Contacts from './pages/Contacts';
import Portfolio from './pages/Portfolio';
import Homepage from './pages/Homepage';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
import Support from './pages/Support';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Homepage />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="projects" element={<Portfolio />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="services" element={<Services />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;