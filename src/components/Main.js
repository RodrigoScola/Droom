import React, { useState, useEffect } from "react";
import { Nav } from "./Nav";
import { auth } from "../firebase";
import { Component } from "react";
import { Sounds } from "./PadSoundTest";
import { Box, Flex } from "@chakra-ui/react";
export default function Main() {
	const [error, setError] = useState("");

	// currentUser, link, handleFeed, handleLogout

	return (
		<Flex justifyContent={"center"} alignItems={"center"} h={"100vh"}>
			<Sounds />
		</Flex>
	);
}
