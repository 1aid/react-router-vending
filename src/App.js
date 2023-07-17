import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack from './Snack';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route path="/snack/:id" component={Snack} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;