import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import Sortition from './pages/Sortition';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sorteio' element={<Sortition />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
