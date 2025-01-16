import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Requisites from './components/Requisites/Requisites.tsx';
import { ScheduleHTML } from './components/ScheduleHTML.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Requisites/>} />
          <Route path="payment" element={<Requisites/>} />
          <Route path="schedule" element={
            <ScheduleHTML/>
          } />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

