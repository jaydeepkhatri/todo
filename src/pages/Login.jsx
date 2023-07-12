import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  useEffect(() => {
    if(isLoggedIn) {
      navigate("/dashboard")
    }
  }, [isLoggedIn, navigate])

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="title">Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Username
            <input type="text" value={username} placeholder="Username" className="input" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>Password
            <input type="password" value={password} placeholder="Password" className="input" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login