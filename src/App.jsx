import { Routes, Route } from 'react-router-dom';
import  Login from './pages/Login';
import './style/main.scss';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App;
