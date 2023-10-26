import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
