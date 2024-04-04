import { RouterProvider, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import {router} from "./router/index.jsx"
import Navbar from './components/Navbar.jsx'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

