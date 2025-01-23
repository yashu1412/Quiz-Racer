import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}

const initialState: GameState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementScore(state, action: PayloadAction<number>) {
      state.score += action.payload;
    },
    incrementCorrectAnswers(state) {
      state.correctAnswers += 1;
    },
    incrementWrongAnswers(state) {
      state.wrongAnswers += 1;
    },
    resetGame(state) {
      state.score = 0;
      state.correctAnswers = 0;
      state.wrongAnswers = 0;
    },
  },
});

export const {
  incrementScore,
  incrementCorrectAnswers,
  incrementWrongAnswers,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;
