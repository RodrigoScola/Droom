import React, { Component } from "react";
import { Card, Box, Button, Heading, Flex, Text, Avatar, Divider } from "@chakra-ui/react";
import { timeDifference } from "../utils";
import { useMemo } from "react";
import { useMusic } from "../../hooks/useMusic";

export const PostCard = ({ createdAt, title, subtitle = "", user, music }) => {
	const { playMusic } = useMusic();
	const content = useMemo(() => {
		return subtitle.substring(0, Math.min(subtitle.length - 1, 200)) + "...";
	}, [subtitle]);
	return (
		<Card p={2} gap={2} my={2} style={{ textTransform: "capitalize" }}>
			<Flex gap={2}>
				<Avatar src={user?.photoUrl} alt={`profile image for ${user.displayName}`} />
				<Flex gap={2} alignItems={"center"}>
					<Heading autoCapitalize size={"md"}>
						{user.displayName}
					</Heading>
					<Heading fontWeight={"normal"} color={"gray"} size={"xs"}>
						{timeDifference(createdAt)}
					</Heading>
				</Flex>
			</Flex>
			<Box>
				<Flex gap={4} textreans alignItems={"center"}>
					<Heading fontWeight={"normal"} size={"md"}>
						{title}
					</Heading>
				</Flex>
				<Divider py={1} />
				<Text pt={2}>{content}</Text>
			</Box>
			<Flex>
				<Button onClick={() => playMusic(music)} colorScheme={"purple"}>
					Play
				</Button>
			</Flex>
		</Card>
	);
};
