import React from 'react'
import './App.css';
import Home from './Components/Home'
import Searchpage from './Components/Searchpage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
             <Searchpage />
          </Route>

          <Route path="/">
             <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
