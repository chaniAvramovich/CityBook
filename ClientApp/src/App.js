import React, { useState, createContext } from 'react';
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Instructions } from './components/Instructions';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';



export const applicationContext = createContext();
const App = () => {


  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    identity: "",
    dateOfBirth: "",
    kind: "",
    HMO: "Meuchedet",
    childrens: []
  })
  return (

    <div className="App">
      <applicationContext.Provider value={{ user, setUser }}>
        <Header></Header>
        <Switch>
          <Route exact path="/Instructions" component={Instructions} />
          <Route exact path="/Form" component={Form} />
          <Route exact path="/">
            <Redirect to="/Form" />
          </Route>
        </Switch>
      </applicationContext.Provider>

    </div>
  );
}



export default App;