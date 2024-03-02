import { Routes } from 'react-router-dom'
import { publicRoutes } from './routers/PublicRoute'

function App() {
  return (
    <div>
      <Routes>{publicRoutes}</Routes>
    </div>
  )
}

export default App
