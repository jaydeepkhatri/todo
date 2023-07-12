
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../redux/todoSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';

function EditTodo() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const username = useSelector((store) => store.auth.username);
    const findTodo = useSelector((store) => store.todos.filter(todo => todo.id == id));


    useEffect(() => {
        if (findTodo.length > 0) {
            setTitle(findTodo[0].title);
            setDescription(findTodo[0].description);
        }

        if (!username || !id) {
            navigate('/')
        }
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateTodo({ id, title, description, username }));
        navigate('/dashboard');
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className="dashboard">
            <button className="logout" onClick={() => handleLogout()}>Logout</button>
            <form className="todo-write-container" onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button type="submit" className='btn'>Update</button>
            </form>
        </div>
    );
}

export default EditTodo;