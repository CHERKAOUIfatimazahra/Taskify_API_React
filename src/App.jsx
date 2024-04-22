import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Logout from './pages/Logout.jsx';
import Dashbooard from './pages/dashboard.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      setEmail(localStorage.getItem('email'));
    }
  }, []);

  return (
    <div className="App w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-50">
      <BrowserRouter>
        {isLoggedIn && <Header />}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashbooard email={email} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setEmail={setEmail}/>} />
          <Route path="/register" element={<Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setEmail={setEmail}/>} />
          <Route path="/logout" element={<Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setEmail={setEmail}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
