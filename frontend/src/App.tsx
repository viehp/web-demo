import React from 'react';
// import Home from './pages/Home/Home';
// import Dashboard from './pages/Dashboard/Dashboard';
import { Outlet ,Link} from 'react-router-dom';
// import LiveChat from './pages/LiveChat/LiveChat';
// import Contact from './pages/Contact/Contact';

export default function App():JSX.Element {
  return (
    <div>       
      <div>
        <Link to="/">Home</Link> | {''}
        <Link to="/dashboard">Dashboard</Link> |{''}
        <Link to="/livechat">LiveChat</Link> |{''}
        <Link to="/contact">Contact</Link> |{''}
        <Link to="/login">Login</Link> |{''}

      </div>
      <Outlet/>
    </div>
  );
}
;
