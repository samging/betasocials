import './App.css';
import Auth from './pages/auth';
import Dash from './pages/dash';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
