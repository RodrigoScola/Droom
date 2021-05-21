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
import Feed from "./feed";

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
                <PrivateRoute exact path="/" component={mainPage} />
                <Route path="/login" component={Login} />
                <Route path="/feed" component={Feed} />
              </Switch>
            </userContext>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
