import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import LiveChat from './pages/LiveChat/LiveChat';
import Contact from './pages/Contact/Contact';
import NotFound from './routes/NotFound';
import Login from './pages/Login/Login';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <React.StrictMode>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/livechat" element={<LiveChat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
