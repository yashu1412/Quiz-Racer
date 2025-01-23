# Racer Quiz Game  

The Racer Quiz Game is an engaging and interactive web-based quiz application where players race cars by answering true/false questions. The game provides instant feedback on each answer, tracks scores, and determines a winner based on correct and incorrect answers.  

## Features  

- **Interactive Gameplay**: Players answer quiz questions to race their cars to the finish line.  
- **Dynamic Feedback**: Instant feedback on answers, with visual cues for correct and incorrect responses.  
- **Score Tracking**: Keeps track of the player's correct and wrong answers, updating the score in real-time.  
- **Smooth Animations**: Cars animate forward or backward based on the player's performance.  
- **Multiple Questions**: A series of true/false questions challenge the player.  
- **Game Over Screen**: Displays final scores and statistics at the end of the game.  

## Getting Started  

### Prerequisites  

To run the project, ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (LTS version recommended)  
- npm (comes with Node.js) or yarn  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/racer-quiz-game.git  
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd racer-quiz-game  
   ```  
3. Install dependencies:  
   ```bash  
   npm install  
   ```  

### Running the Game  

1. Start the development server:  
   ```bash  
   npm start  
   ```  
2. Open [http://localhost:3000](http://localhost:3000) in your browser to play the game.  

## Scripts  

### `npm start`  
Runs the game in development mode. The app will automatically reload if you edit the code.  

### `npm test`  
Launches the test runner in interactive watch mode.  

### `npm run build`  
Builds the app for production, optimizing it for the best performance.  

### `npm run eject`  
Ejects the default Create React App setup, allowing full control over configuration. **This action is irreversible.**  

## Technologies Used  

- **Frontend**: React, TypeScript  
- **State Management**: Redux Toolkit  
- **Styling**: Tailwind CSS  
- **Animations**: CSS transitions  

## How to Play  

1. Start the game by clicking "Start Quiz."  
2. Answer true/false questions as they appear.  
3. Watch the cars race based on your performance:  
   - **Correct Answer**: Your car moves forward.  
   - **Wrong Answer**: The opponent's car moves forward.  
4. Click "Next" to proceed to the next question.  
5. The game ends after all questions are answered, and the final scores are displayed.  

