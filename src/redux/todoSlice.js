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
        deleteTodo: (state, action) => {
            const { id } = action.payload;
            state = state.filter((todo) => todo.id !== id);
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;