import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import mainPage from "./Main";
import Test from "./test";

function App() {
  return (
    
      <div className=''>
        <Router>
          <AuthProvider>
            <userContext>
              <Switch>
                <PrivateRoute exact path="/" component={mainPage} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/test" component={Test} />
              </Switch>
            </userContext>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
