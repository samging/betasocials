import './App.css';
import Auth from './pages/auth.tsx';
import Dash from './pages/dash.tsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/react-toastify.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
         <Route path='/'  to="" element={<Navigate to="/auth" replace/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/dashboard" element={<Dash/>} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
