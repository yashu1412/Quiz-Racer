import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './slices/GameSlice'; // Import the reducer from your slice

// Create the Redux store and add reducers
const store = configureStore({
  reducer: {
    game: gameReducer, // Add your game reducer here
  },
});

// Export the store for use in your app
export default store;

// Optional: Export types for TypeScript support
export type RootState = ReturnType<typeof store.getState>; // Type for the state
export type AppDispatch = typeof store.dispatch; // Type for the dispatch function
