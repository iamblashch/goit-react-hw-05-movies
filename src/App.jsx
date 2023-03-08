import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/UI/Navbar/Navbar';
import UserRotes from './services/userRoutes';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar />
      <main className="container">
        <UserRotes />
      </main>
    </BrowserRouter>
  );
};
