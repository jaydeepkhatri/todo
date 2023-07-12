import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { addTodo } from '../redux/todoSlice';
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [todotitle, setTodoTitle] = useState('');
  const [tododesc, setTododesc] = useState('');

  const username = useSelector((store) => store.auth.username);
  const todosByUsername = useSelector((store) => store.todos.filter(todo => todo.username === store.auth.username));

  useEffect(() => {
    if (!username) {
      navigate('/')
    }
  }, [username, navigate])


  const handleTodoSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      username: username,
      title: todotitle,
      description: tododesc
    }));
    setTodoTitle('');
    setTododesc('');
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <div className="dashboard">
      <form className="todo-write-container" onSubmit={(e) => handleTodoSubmit(e)}>
        <input placeholder="Todo Title" type="text" className="input" value={todotitle} onChange={(e) => setTodoTitle(e.target.value)} />
        <textarea placeholder="Some text..." value={tododesc} onChange={(e) => setTododesc(e.target.value)}></textarea>
        <button type="submit" onClick={(e) => handleTodoSubmit(e)}>Save</button>

      </form>
      <button className="logout" onClick={() => handleLogout()}>Logout</button>

      <div className="todos">
        {
          todosByUsername && todosByUsername.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <button className="btn" onClick={() => navigate(`/edit/${todo.id}`)}>Edit</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Dashboard;
