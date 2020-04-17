import React from 'react';
import FrontPage from './components/FrontPage';
import Resume from './components/Resume';
import './App.css';
import {
  Switch,
  Route,
  HashRouter
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path='/'>
          <FrontPage />
        </Route>
        <Switch>
          <Route path='/resume'>
            <Resume />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
