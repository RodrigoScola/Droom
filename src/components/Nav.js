import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Flex, Image, Avatar, Card } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import DroomLogo from "./images/droom.png";
import { LogoutButton } from "./Buttons/LogoutButton";
export const Nav = () => {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	async function handleLogout() {
		setError("");

		try {
			await logout();
			history.push("/login");
		} catch {
			setError("Failed to log out");
		}
	}
	async function handleFeed() {
		history.push("/feed");
	}
	//history push to dashboard
	return (
		<Flex background={"cyan.500"} py={2}>
			<Flex alignItems={"center"} w={"90%"} justifyContent={"space-between"} m={"auto"} maxW={"1500px"}>
				<Image
					onClick={() => history.push("/")}
					borderRadius={"full"}
					id="profileimg"
					src={DroomLogo}
					height={"75px"}
				/>

				<Flex gap={4} alignItems={"center"}>
					<Button colorScheme={"whatsapp"} fontWeight={"normal"} onClick={handleFeed} className="">
						Feed
					</Button>
					<Button
						onClick={() => history.push("/dashboard")}
						colorScheme={"orange"}
						fontWeight={"normal"}
						className=""
					>
						{currentUser.displayName}
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};
