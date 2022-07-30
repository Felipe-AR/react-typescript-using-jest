import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PageLayout from './pages/PageLayout';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<PageLayout />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
