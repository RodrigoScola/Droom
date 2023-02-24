import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import app, { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import logo from "./images/droom.png";
import { Flex, Box, Image, Button } from "@chakra-ui/react";

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();

	const [_, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const provider = new GoogleAuthProvider();

	const AuthWithGoogle = () => {
		const auth = getAuth();

		try {
			signInWithPopup(auth, provider);
			setError("");
			setLoading(true);
			setTimeout(() => {
				history.push("/");
			}, 5000);
		} catch {
			setError("could not complete google authentication");
		}
	};
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});
	}, []);

	async function handleSubmit(e) {
		try {
			setError("");
			setLoading(true);
			history.push("/");
			await login(emailRef.current.value, passwordRef.current.value);
		} catch {
			setError("Failed to log in");
		}

		setLoading(false);
	}

	return (
		<Flex alignItems={"center"} h={"100vh"} class=" welcome-section">
			<Box w={"50%"} m={"auto"}>
				<Image src={logo} alt={"droom logo"} w={"30em"} />
				<Flex pt={10} justifyContent={"center"}>
					<Button onClick={AuthWithGoogle} colorScheme={"blue"}>
						Login with Google
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
}
