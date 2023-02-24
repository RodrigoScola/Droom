import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import { useFireship } from "../hooks/useFireship";
import { PostCard } from "../components/posting/PostCard";
import { LogoutButton } from "../components/Buttons/LogoutButton";

export default function Dashboard() {
	const [error, setError] = useState("");
	const [posts, setPosts] = useState([]);
	const { currentUser, logout } = useAuth();
	const history = useHistory();
	const fireship = useFireship();
	async function handleLogout() {
		setError("");

		try {
			await logout();
			history.push("/login");
		} catch {
			setError("Failed to log out");
		}
	}

	const go = async () => {
		const posts = await fireship.getPostsByUser(currentUser.uid);
		setPosts(posts.reverse());
	};
	useEffect(() => {
		go();
	}, []);

	console.log(posts);

	return (
		<>
			<Box w={"90%"} m={"auto"} pt={4}>
				<Flex pb={10} gap={10} alignItems={"center"}>
					<Avatar size={"2xl"} name={currentUser.displayName} src={currentUser.photoURL} />
					<Heading size={"2xl"}>{currentUser.displayName}</Heading>
					<LogoutButton />
				</Flex>
				<Box>
					{posts.map((post, index) => (
						<PostCard key={index} {...post} />
					))}
				</Box>
			</Box>
		</>
	);
}
