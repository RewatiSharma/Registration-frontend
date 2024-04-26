import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Batchmaster from './batches/Batchmaster';
import Batchmanager from './batches/Batchmanager';
import RegistrationForm from './RegistrationForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/batchmaster" element={<Batchmaster />} />
        <Route path="/batchmanager" element={<Batchmanager />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;