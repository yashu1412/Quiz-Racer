import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StartPage from '../pages/StartGamePage/index'
import QuestionPage from '../pages/QuestionsPage/index'
import GameOverPage from '../pages/GameOver/index'

const route = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/game',
    element: <QuestionPage />,
  },
  {
    path: '/gameover',
    element: <GameOverPage />,
  },
])

const Router: React.FC = () => {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default Router
