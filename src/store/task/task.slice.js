import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        markSolved(state, action) {
            const solvedTask = state.tasks.find(task => task.id === action.payload.id);
            solvedTask.isSolved = !solvedTask.isSolved;
        },
        toggleOpen(state, action) {
            const task = state.tasks.find(task => task.id === action.payload.id);
            task.isOpen = !task.isOpen;
        },
    },
});

// export const { markSolved, toggleOpen } = taskSlice.actions;
export const taskActions = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
