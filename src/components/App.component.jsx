import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePape from '../routes/home/home.component.jsx';
import DetailsPape from '../routes/details/details.component.jsx';

function App() {
  return(
    <React.Fragment>     
      <Switch>       
        <Route exact path='/' component={HomePape}/>
        <Route path='/:id' component={DetailsPape}/>
      </Switch>
    </React.Fragment>
   
  ) 
}

export default App;
