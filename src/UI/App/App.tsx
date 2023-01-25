import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Routes} from "../../Routes/Routes";
import {Layout} from "../Components/HOCs/Layout";
import {ContextWrapper} from "../../Context/ContextWrapper";

const App = () => {
  return (
      <Router>
          <Switch>
              <ContextWrapper>
                  <Layout>
                      {Routes.map((el, idx) => (
                          <Route
                              path={el.path}
                              key={idx}
                              exact
                          >
                              {<el.page/>}
                          </Route>
                      ))}
                  </Layout>
              </ContextWrapper>
          </Switch>
      </Router>
  )
}

export default App;
