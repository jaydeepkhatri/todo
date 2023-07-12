import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const { username, title, description } = action.payload;
            const newTodo = {
                id: Date.now(),
                title,
                description,
                username
            }
            state.push(newTodo);
        },
        updateTodo: (state, action) => {
            const { id, title, description, username } = action.payload;
            state[state.findIndex(el => parseInt(el.id) === parseInt(id))] = {
                id, title, description, username
            }
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload;
            return state.filter((todo) => todo.id !== id);
        }
    }
})

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;