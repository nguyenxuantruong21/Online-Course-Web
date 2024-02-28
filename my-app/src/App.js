import DashBoardLayout from './layouts/DashBoard/DashBoardLayout'
import useRouteElement from './routers/useRouteElement'

function App() {
  const routeElement = useRouteElement()
  return (
    <div>
      <DashBoardLayout> {routeElement}</DashBoardLayout>
    </div>
  )
}

export default App
