import React, { useEffect } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import MainPage from "./Main";
import Feed from "./feed";
import { useColorMode } from "@chakra-ui/react";

function App() {
	const { colorMode, toggleColorMode } = useColorMode();

	// in production initialColorMode does not work
	useEffect(() => {
		if (colorMode == "light") {
			toggleColorMode();
		}
	}, [colorMode]);

	return (
		<div className="">
			<Router>
				<AuthProvider>
					<Switch>
						<PrivateRoute exact path="/" component={MainPage} />
						<PrivateRoute path="/update-profile" component={UpdateProfile} />
						<PrivateRoute path="/dashboard" component={Dashboard} />
						<Route path="/login" component={Login} />
						<Route path="/feed" component={Feed} />
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
