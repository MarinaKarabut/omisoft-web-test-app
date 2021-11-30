import { Route, Switch } from "react-router-dom"
import { lazy, Suspense } from "react"
import { useSelector, shallowEqual } from "react-redux"

import Loader from "../shared/components/Loader"
import { routes } from "./Routes/routes"
import PublicRoute from './Routes/PublicRoute'
import PrivateRoute from './Routes/PrivateRoute'

const AuthPage = lazy(() => import("../client/pages/AuthPage"))
const MainPage = lazy(() => import("../client/pages/MainPage"))
const NotFoundPage = lazy(() => import("../client/pages/NotFoundPage"))


const App = () => {
  const { auth, main } = routes

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated, shallowEqual)

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <PublicRoute exact path={auth} restricted  component={AuthPage} redirectTo={main} isAuthenticated={isAuthenticated}/>
        <PrivateRoute exact path={main} component={MainPage} redirectTo={auth} isAuthenticated={isAuthenticated}/>
        <Route  component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default App;


