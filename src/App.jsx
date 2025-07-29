import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WatchListProvider } from './context/WatchListContext'; 

function App() {
  return (
    <div className='bg-black/90'>
    <WatchListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </WatchListProvider>
    </div>
  );
}

export default App;
