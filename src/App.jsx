import { Routes, Route } from 'react-router-dom';
import  Login from './pages/Login';
import './style/main.scss';
import Dashboard from './pages/Dashboard';
import EditTodo from './pages/EditTodo';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path='/edit/:id' element={<EditTodo />} />
    </Routes>
  )
}

export default App;
