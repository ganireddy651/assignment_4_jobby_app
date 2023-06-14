import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/LogIn'
import Jobs from './components/Jobs'
import NotFound from './components/NotFound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={Jobs} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
