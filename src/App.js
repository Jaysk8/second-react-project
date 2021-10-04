import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Favorites from './components/Favorites'
import Donate from './components/Donate';

import {GlobalProvider} from './context/GlobalState'


function App() {

  return (
    <GlobalProvider>
    <Router>
      <div className="App">
          < Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/movies">
                < Home />
              </Route>

              <Route path="/favorites">
                < Favorites />
              </Route>

              <Route path="/donate">
                < Donate />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
    </GlobalProvider>
  );
}

export default App;
