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
      console.log('Redux Score Updated:', state.score);
    },
    incrementCorrectAnswers(state) {
      state.correctAnswers += 1;
      console.log('Correct Answers:', state.correctAnswers);
    },
    incrementWrongAnswers(state) {
      state.wrongAnswers += 1;
      console.log('Wrong Answers:', state.wrongAnswers);
    },
    resetGame(state) {
      state.score = 0;
      state.correctAnswers = 0;
      state.wrongAnswers = 0;
      console.log('Game Reset - Score:', state.score);
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
