import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Base from "./pages/Base";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/base" component={Base} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
