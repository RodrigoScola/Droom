import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const LogoutButton = () => {
	const history = useHistory();
	const { currentUser, logout } = useAuth();
	async function handleLogout() {
		try {
			await logout();
			history.push("/login");
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<Button onClick={handleLogout} className="btn ml-2 btn-info">
			Logout
		</Button>
	);
};
