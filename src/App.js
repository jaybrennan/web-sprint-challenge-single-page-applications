import React from "react";
import Header from './components/header'
import CTA from './components/home'
import {Switch, Route} from 'react-router-dom';
import Form from '../src/components/Form';

const App = () => {
  return (
    
    <Switch>

    <Route path="/">

      <Header />

      <Route path="/">

        <CTA />

      </Route>

      <Route exact path="/pizza">

        <Form />

      </Route>




    </Route> 



    </Switch>
    
  );
};
export default App;
