import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import { musicAudio } from "./PadSoundTest";
import { Howl } from "howler";
import { Box, Heading, Image } from "@chakra-ui/react";
import { useFireship } from "../hooks/useFireship";
import { PostCard } from "./posting/PostCard";
import { useMusic } from "../hooks/useMusic";
import { Nav } from "./Nav";

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const Feed = () => {
	const [posts, setPosts] = useState([]);
	const fireship = useFireship();
	const { playMusic } = useMusic();
	const go = async () => {
		const nposts = await fireship.getPosts();
		if (nposts) {
			setPosts(nposts);
		}
	};
	useEffect(() => {
		go();
	}, []);
	return (
		<>
			<Nav />

			<Box w={"90%"} m={"auto"} pt={3} className="background ">
				<Heading textAlign={"center"} py={3}>
					New Posts
				</Heading>
				{posts.map((post) => (
					//post.song.split('')
					<PostCard {...post} />
				))}
			</Box>
		</>
	);
};
export default Feed;
