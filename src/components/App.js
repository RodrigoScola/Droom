import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import mainPage from "./Main";

function App() {
  return (
    <Container className="d-flex justify-content-center">
      <div>
        <Router>
          <AuthProvider>
          <userContext>
          <Switch>
              <PrivateRoute exact path="/" component={mainPage} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
            </Switch>
            </userContext> 
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
