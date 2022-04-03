import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Index from './Components/Index';
import Detail from './Components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
          <div>
            <Header/>
          <Switch>
          <Route exact path="/">
            <Index/>
          </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/Detail">
              <Detail />
            </Route>
            
          </Switch>
        </div>
      </Router>
  );
}

export default App;
